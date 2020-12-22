import React, {Component} from 'react';
import '../css/Tracks.css';

class Tracks extends Component{
    state = {playing: false, audio :null, currentPreviewUrl: null};
    playAudio = (previewUrl) => () =>{
        const audio = new Audio(previewUrl);
        if (!this.state.playing){
            audio.play();
            this.setState({playing:true, audio,currentPreviewUrl:previewUrl})
        }else{
            this.state.audio.pause();
            if(previewUrl===this.state.currentPreviewUrl){
                this.setState({playing:false});
            }else{
                audio.play();
                this.setState({audio,currentPreviewUrl: previewUrl})
            }

        }

    }
    trackIcon = track =>{
        if (!track.preview_url){
            return <span>N/A</span>;
        }
        if(this.state.playing && this.state.currentPreviewUrl === track.preview_url){
            return <span>| |</span>;
        }
        return <span>&#9654; </span>
    }
    render(){
        const {tracks} = this.props;
        if (!tracks) return null;
        return (
            <div>
                {
                    tracks.map(track => {
                        const {id,name,album,preview_url} = track;
                        return(
                            <div key={id} onClick={this.playAudio(preview_url)} className="track">
                                <img src={album.images[0].url} alt="track-image" className="track-image"/>
                                <p className="track-text">{name}</p>
                                <p className="track-icon">{this.trackIcon(track)} </p>
                            </div>
                        );
                    })
                }
            </div>

        );
    }
}
export default Tracks;
