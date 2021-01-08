import React,{Component} from 'react';
import {PubSubContext} from '../pubsub';
import {newMessage} from '../actions/messages';
import {connect} from 'react-redux';

class PublishMessage extends Component{
    state = {text: ''};
    updateText = event =>{
        this.setState({text:event.target.value});
    };

    publishMessage = () =>{
        const {username} = this.props;
        this.context.pubsub.publish(newMessage({text: this.state.text,username}));
    };

    handleKeyPress = (event) =>{
            if (event.key === 'Enter') this.publishMessage();
    };
    render(){
        return (
            <div>
                <h3> Say something! </h3>
                <input onChange={this.updateText} onKeyPress={this.handleKeyPress}/>
                <button onClick={this.publishMessage}>Publish it!</button>
            </div>
        );
    }
    static contextType = PubSubContext;
}

export default connect(({username})=>({username}))(PublishMessage);
