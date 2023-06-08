import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IUser } from '../interface/user';
import { Observable } from 'rxjs';
import { enviroment as env } from '../enviroments/enviroment';
import { Response } from '../interface/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = env.api;

  constructor(
    private http: HttpClient
  ) { }

  getById(id:number) {
    return this.http.get<IUser>(`${this.baseUrl}users/${id}`)
  }

  register(user: IUser) {
    user.id = 0;
    return this.http.post<IUser>(`${this.baseUrl}users`,user)
  }

  update(user:IUser) {
    return this.http.put<IUser>(`${this.baseUrl}users/${user.id}`,user);
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}users`);
  }

  delete(id:number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.baseUrl}users/${id}`);
  }

}
