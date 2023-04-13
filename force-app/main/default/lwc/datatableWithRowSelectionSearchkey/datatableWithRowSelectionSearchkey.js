import {LightningElement,api} from 'lwc';
import getconmethod from '@salesforce/apex/SearchkeyAndDatatable.getconmethod';
const col=[
    {label:'recordId',fieldName:'Id'},
    {label:'Name',fieldName:'Name'},
];
export default class DatatableWithRowSelectionSearchkey extends LightningElement {

    
    buttonLabel='Show Contacts';
   
    isvisible=false;
    myData=[];
    myColumns=col;
    
    @api recordId; //it store current page record id
    @api searchkey='';

    //get related contactlist from apex method
    connectedCallback(){
    this.isvisible=false;
    //calling apex method
    getconmethod({lwcRecordId : this.recordId})
    
       .then(response => {
        this.myData=response;
       })
       .catch(err=>{
           console.log('error')
       })
    }
//search functionality
handleChanged(event){
    
    this.searchkey=event.target.value;
          
 //send searchkey and recordId TO APEX METHOD
 
 getconmethod({ searchkeys : this.searchkey , lwcRecordId : this.recordId})
    .then(res=>{
        this.myData=res;
    })
    .catch(error=>{
        console.log('error')
    })
 }

//show hide toggle functionality
clickhandle(event){
        const label=event.target.label;
        if(label==='Show Contacts'){
            this.buttonLabel='Hide Contacts';
            this.isvisible=true;
        }else if(label==='Hide Contacts'){
            this.buttonLabel='Show Contacts';
            this.isvisible=false;
        }

    }
    rowselectionHandle(event){
        const selectedrowdetails=event.detail.selectedrows;
        window.alert(selectedrowdetails);
    }

}