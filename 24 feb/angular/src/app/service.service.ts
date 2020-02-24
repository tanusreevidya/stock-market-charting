import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/models/users'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  httpUrl = 'http://localhost:8080/register/';
   users =User;
  constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }
 
  getAllUsers(){
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  saveUser(user : User): Observable<User>{
    return this.ht.post(this.httpUrl , user);
  }
  deleteUser(id: number): Observable<User>{
    return this.ht.delete(`http://localhost:8080/register/${id}`);
  }
  updateUserInfo(user : User): Observable<User>{
    console.log("id:::service update user:"+user.id+" nmae"+user.username);
    return this.ht.put(`http://localhost:8080/register`,user);
   }
   getUserById(id:number): Observable<User>{
     console.log("id:::service "+id);
     return this.ht.get(`http://localhost:8080/register/${id}`);
   }
}
