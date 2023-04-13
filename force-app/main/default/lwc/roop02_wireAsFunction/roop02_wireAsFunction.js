import { LightningElement,wire } from 'lwc';
import findAcc from '@salesforce/apex/WireAsFunction.findAcc';
export default class Roop02_wireAsFunction extends LightningElement {

    myData;
    error;

@wire(findAcc)contact(data,error){
    if(data){
        this.myData=data
    }else if(error){
       this.error=error
    }
}

}