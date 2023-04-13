import { LightningElement } from 'lwc';
import{ ShowToastEvent } from 'lightning/platformShowToastEvent';
import LEAD_OBJECT from '@salesforce/schema/Lead';
import LEAD_NAME from '@salesforce/schema/Lead.FirstName';
import LEAD_LASTNAME from '@salesforce/schema/Lead.LastName';
import LEAD_COMPANY from'@salesforce/schema/Lead.Company';
import LEAD_STATUS from'@salesforce/schema/Lead.Status';

export default class RecordEditForm extends LightningElement {

    leadFirstName=LEAD_NAME;
    leadLastName=LEAD_LASTNAME;
    leadCompany=LEAD_COMPANY;
    leadStatus=LEAD_STATUS;
    leadId='create lead record id show here';
    objectApiName=LEAD_OBJECT;

    successHandle(event){

         this.leadId=event.detail.id
          const events= new ShowToastEvent({
               title:"successful",
               message:"lead create successfully",
               variant:'success'
               
          });
          this.dispatchEvent(events);
    }
}