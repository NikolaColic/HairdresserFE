import { Hairdresser } from "./Hairdresser";

export class HairdresserImage {
    hairdresserImageId : number;
    hairdresser : Hairdresser;
    url : string; 
    
    constructor(hairdresserImageId : number,hairdresser : Hairdresser, url : string)
    {
        this.hairdresserImageId = hairdresserImageId; 
        this.hairdresser = hairdresser;
        this.url = url;
    }
}