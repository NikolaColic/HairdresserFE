import { HairdresserImage } from "./HairdresserImage";
import { Municipality } from "./Municipality";
import { Reservation } from "./Reservation";
import { SocialHairdresser } from "./SocialHairdresser";

import { User } from "./User";

export class Hairdresser {
    hairdresserId : number;
    name : string; 
    adress : string; 
    taxId : string; 
    parentId : Date; 
    number : string; 
    gmail : string; 
    website : string;
    description : string;
    pricelist : string;
    gender : number; 
    municipality : Municipality; 
    owner : User;
    images : HairdresserImage[];
    reservations : Reservation[]; 
    socialNetworks : SocialHairdresser[];
    constructor(hairdresserId : number, name : string,adress : string, taxId : string,parentId : Date,number : string, gmail : string, 
        website : string, description : string,pricelist : string, gender : number, municipality : Municipality, owner : User,
        images : HairdresserImage[], reservations : Reservation[], socialNetworks : SocialHairdresser[])
    {
        this.hairdresserId = hairdresserId; 
        this.name = name; 
        this.adress = adress; 
        this.taxId = taxId; 
        this.parentId = parentId;
        this.number = number; 
        this.gmail = gmail;
        this.website = website; 
        this.description = description; 
        this.pricelist = pricelist; 
        this.gender = gender; 
        this.municipality = municipality; 
        this.owner = owner;
        this.images = images; 
        this.reservations = reservations;
        this.socialNetworks = socialNetworks;
    }
}