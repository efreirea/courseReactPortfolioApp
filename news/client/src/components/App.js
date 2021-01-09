import React,{ Component } from 'react';

class App extends Component{
    state = {stories : []};

    componentDidMount() {
        fetch('http://localhost:3000/topstories')
        .then(response => response.json())
        .then(json => this.setState({stories:json}))
        .catch(error=>alert(error.message));
    }

    render(){

        return (
            <div>
                <h2> Latest News </h2>
                {
                    this.state.stories.map(item =>{
                        const {id,by,score,title,url,time} = item;
                        return(
                            <div key={id}>
                                <a href={url}> <h3>{title}</h3></a>
                                <p> Upcotes: {score} </p>
                                <p>{by} - {new Date(time).toLocaleString()}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default App;
