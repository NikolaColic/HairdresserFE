import { Hairdresser } from "./Hairdresser";
import { SocialNetwork } from "./SocialNetwork";

export class SocialHairdresser {
    socialHairdresserId : number;
    hairdresser : Hairdresser;
    socialNetwork : SocialNetwork;
    url : string; 
    
    constructor(socialHairdresserId : number, hairdresser : Hairdresser, socialNetwork : SocialNetwork, url : string)
    {
        this.socialHairdresserId = socialHairdresserId; 
        this.hairdresser = hairdresser;
        this.socialNetwork = socialNetwork;
        this.url = url;
    }
}