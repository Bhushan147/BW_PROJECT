import { LightningElement } from 'lwc';
import PubSub from 'c/pubSub';

export default class ComponentPublisherA extends LightningElement {

    inputValue;

    inputChangeHandle(event){
    
        this.inputValue=event.target.value;
    
    }
    
    clickHandle(){
        const x=this.inputValue;
        this.eventPublisher(x);
    
    }
    eventPublisher(){
        PubSub.Publish("PassData",data);
    
    
    }
    }



