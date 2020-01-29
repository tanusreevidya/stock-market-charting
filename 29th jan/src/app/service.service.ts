import { Injectable } from '@angular/core';
import { USERS } from '../app/models/mock-user'; 
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/models/users'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  httpUrl = 'http://localhost:3200/users/';
   users =USERS;
  constructor(private httpClient: HttpClient) { }
 
  getAllUsers(){
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  saveUser(user : User): Observable<User>{
    return this.httpClient.post<User>(this.httpUrl , user);
  }
}
