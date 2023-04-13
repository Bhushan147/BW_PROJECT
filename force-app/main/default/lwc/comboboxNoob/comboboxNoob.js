import { LightningElement } from 'lwc';
import accmethod from '@salesforce/apex/ComboboxNoob.accmethod';
export default class ComboboxNoob extends LightningElement {

    accValues='';
    accOptions=[];
    get Options(){
                return this.accOptions;
    }
    connectedCallback(){
        accmethod()
        .then(response=>{
            let arr=[];
                for(var i=0 ; i<response.length ;i++){
                    arr.push({label:response[i].Name , value:response[i].Id})
                }
                this.accOptions=arr;
        }) 
    }
    changeHandle(event){
        this.accValues=event.detail.value;
    }
}