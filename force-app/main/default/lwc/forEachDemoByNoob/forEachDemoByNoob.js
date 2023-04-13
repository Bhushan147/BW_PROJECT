import { LightningElement,wire} from 'lwc';
import getleadMethod from '@salesforce/apex/ForEachDemoByNoob.getleadMethod';



export default class ForEachDemoByNoob extends LightningElement {

    mydata=[];
    
      @wire(getleadMethod)
      leads({data,error}){
       if(data){
          this.mydata=data;
       }else if(error){
           console.log('error')
       }
      }
}