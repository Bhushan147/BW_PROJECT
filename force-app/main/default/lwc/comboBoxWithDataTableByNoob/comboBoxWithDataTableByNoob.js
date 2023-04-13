import { LightningElement } from 'lwc';
import accMethod from'@salesforce/apex/ComboBoxWithDataTable.accmethod';
import conmethod from'@salesforce/apex/ComboBoxWithDataTable.conmethod';
const col=[
    {label:'Name',fieldName:'Name'},
    {label:'Email',fieldName:'Email'},
];

export default class ComboBoxWithDataTableByNoob extends LightningElement {

    accValues='';
    accArray=[];
    visibleCard=false;
    conData=[];
    conColumns=col;


get Options(){
    return this.accArray;
}

connectedCallback(){
    accMethod()
    
    .then(response =>{
        let arr=[];
         for(var i=0;i<response.length;i++){
            arr.push({label:response[i].Name,value:response[i].Id})
         
        }this.accArray=arr
    }) 

}

changeHandle(event){
    
    this.visibleCard=true

    this.accValues=event.detail.value


    conmethod({lwcAccountId:this.accValues})
      .then(res=>{
        this.conData=res;
      })

}
}