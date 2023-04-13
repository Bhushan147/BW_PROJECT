import { LightningElement } from 'lwc';

export default class MyFirstLwc extends LightningElement {

    myname="Bhushan Mulmule";
    handleclick(){

        window.alert("hello lwc");
    }

}