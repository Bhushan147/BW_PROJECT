import { api,LightningElement } from 'lwc';
import LEAD_OBJECT from '@salesforce/schema/Lead';
import LEAD_NAME from '@salesforce/schema/Lead.FirstName';
import LEAD_EMAIL from '@salesforce/schema/Lead.Email';
import LEAD_SOURCE from '@salesforce/schema/Lead.LeadSource'
import LEAD_INDUSTRY from '@salesforce/schema/Lead.Industry'

export default class RecordViewFormByNoob extends LightningElement {
    
    nameField=LEAD_NAME
    emailField=LEAD_EMAIL
    leadSourceField=LEAD_SOURCE
    industryField=LEAD_INDUSTRY
    @api recordId
    //objectApiName=LEAD_OBJECT;
   @api objectApiName
}