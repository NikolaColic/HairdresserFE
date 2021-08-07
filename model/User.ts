import { Reservation } from "./Reservation";
import { FavouriteHairdresser } from "./FavouriteHairdresser";


export class User {
    userId : number;
    name : string; 
    username : string; 
    email : string; 
    date : Date; 
    number : string; 
    password : string; 
    imageUrl : string;
    reservationsHistory : Reservation[]; 
    favouritesHairdresser : FavouriteHairdresser[];
    constructor(userId : number,name : string,username : string,email : string,date : Date, number : string,password : string,
        imageUrl : string, reservationsHistory : Reservation[], favouritesHairdresser : FavouriteHairdresser[])
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
    }
}