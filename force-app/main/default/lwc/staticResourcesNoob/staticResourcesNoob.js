import { LightningElement } from 'lwc';
import Noob from '@salesforce/resourceUrl/Noob';

export default class StaticResourcesNoob extends LightningElement {

    players=[
        {
            id:"1",
            src:Noob +'/lwc_Image/rohit.jpg',
            header:"rohit sharma",
            discription:"batter(indian capatain)",
            href:"https://en.wikipedia.org/wiki/Rohit_Sharma",
            

        },
        {
            id:"2",
            src:Noob +'/lwc_Image/VIRAT.jpg',
            header:"Virat Kohli",
            discription:"batter(indian former capatain)",
            href:"https://en.wikipedia.org/wiki/Virat_Kohli",
            

        },
        {
            id:"3",
            src:Noob +'/lwc_Image/SKY.jpg',
            header:"Suryakumar Yadav",
            discription:"batter(voice capatain T20)",
            href:"https://en.wikipedia.org/wiki/Suryakumar_Yadav",
            

        },
]


}