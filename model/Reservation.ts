import { Hairdresser } from "./Hairdresser";
import { User } from "./User";

export class Reservation {
    reservationId : number;
    hairdresser : Hairdresser;
    user : User;
    time : Date;
    description : string; 
    note : string; 
    mark : string;
    
    constructor(reservationId : number, hairdresser : Hairdresser, user : User, time : Date, description : string, note : string, 
        mark : string)
    {
        this.reservationId = reservationId; 
        this.hairdresser = hairdresser; 
        this.user = user; 
        this.time = time; 
        this.description = description; 
        this.note = note; 
        this.mark = mark;
    }
}