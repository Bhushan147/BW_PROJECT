import { LightningElement,track,wire } from 'lwc';
import getaccount from '@salesforce/apex/wireDemoBySalesforceNoob.getaccount';

const columns=[
    {label:'Name',fieldName:'Name'},
    {label:'account record id',fieldName:'Id'},
];
export default class WireDemoBySalesforceNoob extends LightningElement {

   @track columns=columns;
   @track data=[];

   @wire(getaccount)
   wiredaccrecords({data,error}){
    if(data){
        this.data=data;
    }else if(error){
        console.log("error occured")
    }
   }
}