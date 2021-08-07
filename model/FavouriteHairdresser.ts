import { Hairdresser } from "./Hairdresser";
import { User } from "./User";

export class FavouriteHairdresser {
    favouriteHairdresserId : number;
    hairdresser : Hairdresser;
    user : User;
    
    constructor(favouriteHairdresserId : number,hairdresser : Hairdresser, user : User)
    {
        this.favouriteHairdresserId = favouriteHairdresserId; 
        this.hairdresser = hairdresser;
        this.user = user;
    }
}