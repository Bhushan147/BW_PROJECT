import { LightningElement } from 'lwc';

export default class Bwa2_DataBinding extends LightningElement {
    firstname;
   lastName;
   mobile;
    callme(event){
        this.firstname=event.target.value;
        
    }
    showme(event){
        this.lastName=event.target.value;
    }
    handle(event){
        this.mobile=event.target.value;
    }
}