import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {


    addHandle(){


        this.dispatchEvent(new CustomEvent('add'));
    }

    substractHandle(){

        this.dispatchEvent(new CustomEvent('substract'));

    }


}