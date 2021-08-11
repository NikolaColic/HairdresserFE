import { Reservation } from "./Reservation";
import { FavouriteHairdresser } from "./FavouriteHairdresser";
import { Hairdresser } from "./Hairdresser";


export class User {
    userId : number;
    name : string; 
    surname : string;
    username : string; 
    email : string; 
    date : Date; 
    number : string; 
    password : string; 
    imageUrl : string;
    reservationsHistory : Reservation[]; 
    favouritesHairdresser : FavouriteHairdresser[];
    hairdressersOwner : Hairdresser[];
    constructor(userId : number,name : string,surname : string,username : string,email : string,date : Date, number : string,password : string,
        imageUrl : string, reservationsHistory : Reservation[], favouritesHairdresser : FavouriteHairdresser[],hairdressersOwner : Hairdresser[])
    {
        this.userId = userId; 
        this.name = name; 
        this.email = email; 
        this.date = date; 
        this.username = username; 
        this.number = number; 
        this.password = password; 
        this.imageUrl = imageUrl;
        this.reservationsHistory = reservationsHistory;
        this.favouritesHairdresser = favouritesHairdresser;
        this.hairdressersOwner = hairdressersOwner;
        this.surname = surname;
    }
    
}