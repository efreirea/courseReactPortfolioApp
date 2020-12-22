import React,{ Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks'
import Search from './Search';
// class RegularClass{}
// class ComponentClass extends Component{
//
// }
//
// const regularClassInstance = new RegularClass();
// const otherClass = new ComponentClass();
//
// console.log('regular',regularClassInstance);
// console.log('ComponentClass', otherClass);

class App extends Component{
    state = { artist:null,topTracks:null};


    searchArtist = (artistQuery) => {
        const urlArtist = encodeURI('https://spotify-api-wrapper.appspot.com/artist/'+artistQuery);
        fetch(urlArtist)
        .then((response)=>{
            return response.json();
        })
        .then((responseBodyJson)=>{
            if(responseBodyJson.artists.items.length <=0){
                alert("No artists found");
            }else{
                const artist = responseBodyJson.artists.items[0];
                this.setState({artist});
                const artistId = responseBodyJson.artists.items[0].id;
                const urlTracks = encodeURI(`https://spotify-api-wrapper.appspot.com/artist/${artistId}/top-tracks/`)
                fetch(urlTracks)
                .then((response)=>{
                    return response.json();
                })
                .then((responseBodyJson)=>{
                    const topTracks = responseBodyJson.tracks;
                    this.setState({topTracks});
                })
                .catch((reponseErr)=>{
                    alert(error.message);
                });
            }

        })
        .catch((error)=>{
            alert(error.message);
        });
    }


    render(){
        console.log(this.state);
        return (
            <div>
                <h2> Music Master</h2>
                <Search searchArtist = {this.searchArtist}/>
                <Artist artist={this.state.artist}/>
                <Tracks  tracks = {this.state.topTracks}/>
            </div>
        );
    }
}

export default App;
