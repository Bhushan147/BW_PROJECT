import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ShowToastFunction extends LightningElement {

    mytitle ="salesforce noob ";
//first function
    handleclick(){

        this.ShowToast(this.mytitle);


    }
//2ND FUNCTION
    ShowToast(myFirstArgument){
     const event= new ShowToastEvent({
     title: myFirstArgument,
     message:'i want to show toast msg',
     variant:'success',
    
    })
    this.dispatchEvent(event); 
    }
   




}