import { FavouriteHairdresser } from "../model/FavouriteHairdresser";
import { Hairdresser } from "../model/Hairdresser";
import { Municipality } from "../model/Municipality";
import { Reservation } from "../model/Reservation";
import { SocialNetwork } from "../model/SocialNetwork";
import { User } from "../model/User";

const baseUrl = "http://107b4bf2c37d.ngrok.io/"; 
 
//FavouriteHairdresser

export const FavouriteHairdresserAPI = {
    PostFavouriteHairdresserAPI, DeleteFavouriteHairdresserAPI 
}
 
export async function PostFavouriteHairdresserAPI(favouriteHairdresser : FavouriteHairdresser) {
    const res = await fetch(baseUrl + `hair/v1/favourite`, {
        method: "POST",
        body: JSON.stringify(favouriteHairdresser),
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}

export async function DeleteFavouriteHairdresserAPI(id : number) {
    const res = await fetch(baseUrl + `hair/v1/favourite/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}

//Municipality 


export const MunicipalityAPI = {
    GetMunicipalities
}

export async function GetMunicipalities() : Promise<Municipality[]> {
    const res = await fetch(baseUrl + `hair/v1/municipality/GetAll`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    var list = await res.json();
    return list;
}

//SocialNetwork 


export const SocialNetworkAPI = {
    GetSocialNetworks
}

export async function GetSocialNetworks() : Promise<SocialNetwork[]> {
    const res = await fetch(baseUrl + `hair/v1/socialnetworks/GetAll`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    var list = await res.json();
    return list;
}

//User

export const UserAPI = {
    GetUsers, GetUserById, PostUserAPI, PutUserAPI, DeleteUserAPI, Authentification
}
export async function Authentification(user : User) : Promise<User> {
  const res = await fetch(baseUrl + `hair/v1/users/authentification`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
  const userResult = await res.json();
  return userResult;
}

export async function GetUsers() : Promise<User[]> {
    const res = await fetch(baseUrl + `hair/v1/users/GetAll`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    var list = await res.json();
    return list;
}

export async function GetUserById(id : number) : Promise<User> {
    const res = await fetch(baseUrl + `hair/v1/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    var list = await res.json();
    return list;
}

export async function PostUserAPI(user : User) {
    const res = await fetch(baseUrl + `hair/v1/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}

export async function PutUserAPI(user : User) {
    const res = await fetch(baseUrl + `hair/v1/users/${user.userId}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}

export async function DeleteUserAPI(id : number) {
    const res = await fetch(baseUrl + `hair/v1/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}


//Reservations 

export const ReservationsAPI = {
    GetReservations, GetReservationById, PostReservationAPI, PutReservationAPI, DeleteReservationAPI
}


export async function GetReservations() : Promise<Reservation[]> {
    const res = await fetch(baseUrl + `hair/v1/reservations/GetAll`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    var list = await res.json();
    return list;
}

export async function GetReservationById(id : number) : Promise<Reservation> {
    const res = await fetch(baseUrl + `hair/v1/reservations/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    var list = await res.json();
    return list;
}

export async function PostReservationAPI(reservation : Reservation) {
    const res = await fetch(baseUrl + `hair/v1/reservations`, {
        method: "POST",
        body: JSON.stringify(reservation),
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}

export async function PutReservationAPI(reservation : Reservation) {
    const res = await fetch(baseUrl + `hair/v1/reservations/${reservation.reservationId}`, {
        method: "PUT",
        body: JSON.stringify(reservation),
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}

export async function DeleteReservationAPI(id : number) {
    const res = await fetch(baseUrl + `hair/v1/reservations/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}

//Hairdresser
 
export const HairdresserAPI = {
    GetHairdressers, GetHairdresserById, PostHairdresserAPI, PutHairdresserAPI, DeleteHairdresserAPI
}


export async function GetHairdressers() : Promise<Hairdresser[]> {
    const res = await fetch(baseUrl + `api/v1/hairdresser/GetAll`, {
        method: "GET",
        headers: {
          'Accept': 'application/json, text/plain',
          "Content-Type": "application/json"
        }
      });
    var list = await res.json();
    return list;
}

export async function GetHairdresserById(id : number) : Promise<Hairdresser> {
    const res = await fetch(baseUrl + `api/v1/hairdresser/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    var list = await res.json();
    return list;
}

export async function PostHairdresserAPI(hairdresser : Hairdresser) {
    const res = await fetch(baseUrl + `api/v1/hairdresser`, {
        method: "POST",
        body: JSON.stringify(hairdresser),
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}

export async function PutHairdresserAPI(hairdresser : Hairdresser) {
    const res = await fetch(baseUrl + `api/v1/hairdresser/${hairdresser.hairdresserId}`, {
        method: "PUT",
        body: JSON.stringify(hairdresser),
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}

export async function DeleteHairdresserAPI(id : number) {
    const res = await fetch(baseUrl + `apo/v1/hairdresser/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return await res.ok;
}


