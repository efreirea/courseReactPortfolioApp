import React from 'react';
import {connect} from 'react-redux';
import CreateReaction from './CreateReaction';

const MessageReactions = ({messageReactions}) => {
    if(!messageReactions) return null;

    return(
        messageReactions.map((reaction,index) =>{
            const {id,emoji,username} = reaction;

            return (
                <span key = {id}>
                    <em>{username}: </em>
                    {emoji}
                    {
                        (index !== messageReactions.length-1) ? "," : null
                    }
                </span>
            );
        })
    );
}
const Message = props=>{

    return (

        <div>
            <h4>{new Date(props.item.timestamp).toLocaleString()}</h4>
            <p>{props.item.text}</p>
            <h4>- {props.item.username} </h4>
            <CreateReaction messageId={props.item.id}/>
            <MessageReactions messageReactions={props.messageReactions}/>
            <hr/>
        </div>
    );
}

const MessageBoard = (props) =>{
    return (
        <div>
            {
                props.items.map((item)=>{
                    return(
                        <Message key={item.id} item={item} messageReactions={props.reactions[item.id]}/>
                    );
                })
            }
        </div>
    );
}

export default connect(({messages:{items},reactions})=>{
    return {
        items,reactions
    };
}
)(MessageBoard);
