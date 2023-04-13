import { LightningElement } from 'lwc';

export default class IfTrueFalseConditionalRendbyNoob extends LightningElement {
onclickbuttonlabel='show';
mytitle='Bhushan Mulmule';
cardisvisible=false;

onclickhandle(event){

    const label=event.target.label;
    if(label==='show'){
        this.onclickbuttonlabel='hide';
        this.cardisvisible=true;
    }else if(label==='hide'){
        this.onclickbuttonlabel='show';
        this.cardisvisible=false;
    }
}


}