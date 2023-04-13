import { LightningElement } from 'lwc';
import FLIGHT_OBJECT from '@salesforce/schema/Flight_Details__c';
import FLIGHT_NAME from '@salesforce/schema/Flight_Details__c.Name';
import FLIGHT_PILOTNAME from '@salesforce/schema/Flight_Details__c.Pilot_Name__c';
import FLIGHT_PILOTEMAIL from '@salesforce/schema/Flight_Details__c.Pilot_Email__c';
import FLIGHT_STARTCITY from '@salesforce/schema/Flight_Details__c.Start_City__c';
import FLIGHT_DISTINATIONCITY from '@salesforce/schema/Flight_Details__c.Destination_City__c';


export default class RecordFormDemo extends LightningElement {

    fields=[FLIGHT_NAME,FLIGHT_PILOTNAME,FLIGHT_PILOTEMAIL,FLIGHT_STARTCITY,FLIGHT_DISTINATIONCITY];
   
    objectApiName=FLIGHT_OBJECT;
    recordId='a0E5j00000I2GjeEAF'



}