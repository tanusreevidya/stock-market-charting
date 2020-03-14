import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/models/users'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  httpUrl = environment.host+'user-service/register/';
   users =User;
  constructor(@Inject (HttpClient) private httpClient) { }
 
  LoggedIn(){
    let user_id = localStorage.getItem('userId');
    if(user_id==null){
      return false;
    }else{
      return true;
    }
  }

  isActivated(user:User)
  {
    if(user.active == true){
      return true;
    }
  }

   isAdmin(){
     if (sessionStorage.getItem("userType")=="admin"){
       return true;
     }else {
       return false;
     }
   }

  getAllUsers(){
    return this.httpClient.get(this.httpUrl);
  }

  saveUser(user : User){
    return this.httpClient.post(this.httpUrl , user);
  }
  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete(environment.host+`user-service/register/${id}`);
  }
  updateUserInfo(user : User): Observable<User>{
    return this.httpClient.put(this.httpUrl,user);
   }
   getUserById(id:number): Observable<User>{
     console.log("id:::service "+id);
     return this.httpClient.get(environment.host+`user-service/register/${id}`);
   }
  //  reg(){
  //    return this.ht.get(`http://localhost:8000/reg`);
  //  }
   serviceActivation(obj){
     return this.httpClient.put(environment.host+`user-service/activate`,obj)
   }

}
