import { LightningElement,track } from 'lwc';
import getcontact from '@salesforce/apex/ImparativeDemoBySalesforceNoob.getcontact';

const columns=[
{label:'contact record id',fieldName:'Id'},
{label:'Name',fieldName:'Name'},

];

export default class ImparativeDemoBySalesforceNoob extends LightningElement {

    @track columns=columns;
    @track data=[];

    connectedCallback(){
    getcontact()
    .then(result =>{
        
        this.data=result;

    }) .catch(error =>{
        console.log('error occured');
    })
    
    
    }
}