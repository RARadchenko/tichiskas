import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../classes/user";
  
@Injectable()
export class HttpService{
  
    private static readonly HOSTNAME: string = "http://localhost:4200";
    constructor(private http: HttpClient) {}

    doesUserExist(data: string): Observable<Object> {
        return this.http.get(`${HttpService.HOSTNAME}/user/exist?data=${data}`);
    }

    getUser(data: string, password: string): Observable<Object> {
        return this.http.post(`${HttpService.HOSTNAME}/user/get`, {data, password});
    }

    addUser(user: User): Observable<Object> {
        return this.http.post(`${HttpService.HOSTNAME}/user/create`, {user});
    }

    updateUser(user: User): Observable<Object> {
        return this.http.put(`${HttpService.HOSTNAME}/user/update`, {user});
    }
}