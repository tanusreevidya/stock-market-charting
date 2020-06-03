import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ServiceService } from '../service.service';
import { User } from '../models/users';
import { environment } from 'src/environments/environment';

const url=environment.host + "user-service/login";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService
 {
  constructor(private service:ServiceService, private http: HttpClient) { }
  authenticate(username: string, password:string)
  {
    //create a security token
    let authenticationToken= "Basic " + window.btoa(username + ":" + password);
    console.log(authenticationToken);
    let headers= new HttpHeaders({
      Authorization:authenticationToken   
    });
    console.log("calling server");
    //send the request
    return this.http.get(url,{headers}).pipe(
      map((data: User) => {
        console.log("success");
        sessionStorage.setItem("username", username);
        //save the token
        sessionStorage.setItem("token", authenticationToken);
        sessionStorage.setItem("userType",data.userType === "ROLE_ADMIN"? "admin" : "user");
        
        return data;
      }),
      //failure function
      map(error => {
        //console message
        console.log("failure")
        return error;
      })
      
    );
  }
  getAuthenticationToken() {
    if (this.isUserLoggedIn())
      return sessionStorage.getItem("token");
    return null;
  }
  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    if (user == null)
      return false;
    return true;
  }
  getProfileUrl(): string {
    let url = sessionStorage.getItem("profile");
    return url;
  }
  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("userId")
  }
  getUserDetails(): string {
    let user = sessionStorage.getItem('username');
    return user;
  }
  isAdmin(): boolean {
    let user = sessionStorage.getItem('userType');
    if (user == 'admin')
      return false;
    return true;
  }
  isUser(): boolean {
    let user = sessionStorage.getItem('userType');
    if (user == 'user')
      return false;
    return true;
  }
}
