import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { urls } from "../constants/urls";
import { IUser } from "../interfaces";

@Injectable({
    providedIn : "root"
})
export class UserService {
    constructor(private httpClient:HttpClient){

    }
    getAll():Observable<IUser[]>{
        return this.httpClient.get<IUser[]>(urls.users)
    }
    getById(id:string):Observable<IUser>{
        return this.httpClient.get<IUser>(`${urls.users}/${id}`)
    }

}