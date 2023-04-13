import { LightningElement } from 'lwc';
import getaccount from '@salesforce/apex/SearchKeyAccounts.getaccount';
const col=[
    {label:'record Id',fieldName:'Id'},
    {label:'Name',fieldName:'Name'},
];

export default class SearchKeyAccounts extends LightningElement {

     accData=[];
     accColumns=col;
connectedCallback(){
    getaccount()
        .then(result=>{
           this.accData=result;

        }).catch(error=>{
            console.log('error');
        })

}

}