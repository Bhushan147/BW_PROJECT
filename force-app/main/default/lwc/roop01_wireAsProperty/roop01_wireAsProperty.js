import { LightningElement,wire } from 'lwc';
import getCon from '@salesforce/apex/WireAsPropertyClass.getCon';
export default class Roop01_wireAsProperty extends LightningElement {

    
    @wire(getCon)contact
}