import { LightningElement,wire } from 'lwc';
import GetAcc from '@salesforce/apex/Bwtestque1.getAccount';
import GetCon from '@salesforce/apex/Bwtestque1.getContacts';
import GetAcclist from '@salesforce/apex/Bwtestque1.getAccountdata';

const accCol=[
    {label:'Id',fieldName:'Id'},
    {label:'Name',fieldName:'Name'},
    {label:'Rating',fieldName:'Rating'},
    {label:'Industry',fieldName:'Industry'},
    {label:'Ownership',fieldName:'Ownership'},
];
const conCol=[
    {label:'Id',fieldName:'Id'},
    {label:'FirstName',fieldName:'FirstName'},
    {label:'LastName',fieldName:'LastName'},
    {label:'Email',fieldName:'Email'},
    {label:'Phone',fieldName:'Phone'},
];
    
export default class Bwtestque1 extends LightningElement {

    accData=[]
    accCol=accCol
    conData=[]
    conCol=conCol
    accInputValue;
    accOptions=[]

       @wire (GetAcc)
       accounts({data,error}){
        if(data){
            let arr=[];
            for(var i=0;i<data.length; i++){
                arr.push({label:data[i].Name})
            }this.accOptions=arr;

        }
    }
      changeHandler(event){
            this.accInputValue=event.detail.value;

    }
    @wire(GetCon,{accname:'$accInputValue'})
    contacts(data,error){
        if(data){
            this.conData=data;
        }if(error){
            console.log(error)
        }
    }

    @wire(GetAcclist,{accname:'$accInputValue'})
    accountslist(data,error){
        if(data){
            this.accData=data;
        }if(error){
            console.log(error)
        }

    }
}