import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/bwTest1.getAccount';
import getContact from '@salesforce/apex/bwTest1.getContact';
const col=[
    {label:'name',fieldName:'Name' },
    {label:'Rating',fieldName:'Rating'},
    {label:'Industry',fieldName:'Industry' },
    {label:'Ownership',fieldName:'Ownership' },
];

const col1=[
    {label:'name',fieldName:'FirstName' },
    {label:'lastname',fieldName:'LastName'},
    {label:'email',fieldName:'Email' },
    {label:'phone',fieldName:'Phone' },
];

export default class BwTest1 extends LightningElement {
isVisible=true;
myColumns=col;
myColumns2=col1;
myData=[]
myData2=[]
@wire (getAccount)
getAccount({data,error}){
    if(data){
        this.myData=data;

    }else if(error){
        windows.alert('error occured');
    }
}


@wire (getContact)
getContact({data,error}){
    if(data){
        this.myData2=data;

    }else if(error){
        windows.alert('error occured');
    }
}

}