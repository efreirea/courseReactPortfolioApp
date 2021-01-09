const express = require('express');
const stories = require('./stories');
const request = require('request');
const path = require('path');
const app = express();

app.use((req,res,next)=>{
    console.log("Request Details. Method: ",req.method,"Original url: ",req.originalUrl);
    next();
});


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    next();
});

app.use(express.static(path.join(__dirname,'client/dist')));

app.get('/ping',(req,res)=>{
    res.send('pong');
});

app.get('/stories',(req,res)=>{
    res.json(stories);
});

app.get('/stories/:title',(req,res)=>{
    const {title} = req.params;

    res.json(stories.filter(story=> story.title.includes(title)));
});


app.get('/topstories',(req,res,next)=>{
    request({
        url:'https://hacker-news.firebaseio.com/v0/topstories.json'
    },(error,response,body)=>{
        if(error || response.statusCode!==200){
            return next(new Error('Error Requesting top stories'));

        }
        const topStories = JSON.parse(body);
        const limit = 10;

        const fullTTopStoriesPromises = topStories.slice(0,limit).map(story=>{
            return new Promise((resolve,reject)=>{
                request({
                    url: `https://hacker-news.firebaseio.com/v0/item/${story}.json`

                },(error,response,body)=>{
                    if (error || response.statusCode!==200){
                        return reject(new Error("Error requesting story item"));
                    }
                    resolve(JSON.parse(body));
                });
            });

        });
        Promise.all(fullTTopStoriesPromises).then(fullTTopStories=>{
            res.json(fullTTopStories);
        }).catch((err)=>{
            next(err)
        });

    });
});

app.use((err,req,res,next)=>{
    console.log('err',err);
    res.status(500).json({
        type:'error',
        message: err.message
    });
});
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});
