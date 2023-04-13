import { LightningElement } from 'lwc';
import PubSub from 'c/pubSub';
export default class ComponentSubscribeB extends LightningElement {

    message;

    connectedCallback(){
    
        this.callSubscriber();
    
    }
    callSubscriber(){
    PubSub.Subscribe("PassData",this.SubscribeCallback);
    
    
    }
    SubscribeCallback=(event)=>
    {
    this.message=event
    }
    
    }

