import PubNub from 'pubnub';
import pubnubConfig from "./pubnub.config"
import {createContext} from 'react';

const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL'

class PubSub {
    constructor(){
        this.pubnub = new PubNub(pubnubConfig);
        this.pubnub.subscribe({channels: [MESSAGE_CHANNEL]});
    }

    addListener = listenerConfig =>{
        this.pubnub.addListener(listenerConfig);
    }

    publish = message => {
        console.log("publush message",message)
        this.pubnub.publish({message,channel:MESSAGE_CHANNEL})
    }
}

export const PubSubContext = createContext();

export default PubSub;

// pubnub.addListener({
//     message:(messageObject)=>{
//         console.log(messageObject);
//     }
// });
//
// setTimeout(()=>{
//     pubnub.publish({
//         message:"foo",
//         channel: MESSAGE_CHANNEL
//     });
// },1000)
