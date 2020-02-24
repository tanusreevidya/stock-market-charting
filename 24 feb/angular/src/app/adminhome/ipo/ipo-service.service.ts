import { Injectable, Inject } from '@angular/core';
import { Ipos } from "../../models/ipos";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpoServiceService {

  httpUrl = 'http://localhost:8080/ipo/';
  ipo =Ipos;
 constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }

 getAllIpos(){
   return this.httpClient.get<Ipos[]>(this.httpUrl);
 }

 saveIpo(ipo : Ipos): Observable<Ipos>{
   return this.ht.post(this.httpUrl , ipo);
 }
 deleteIpo(id: number): Observable<Ipos>{
   return this.ht.delete(`http://localhost:8080/ipo/${id}`);
 }
 updateIpoInfo(ipo : Ipos): Observable<Ipos>{
   console.log("id:::service update user:"+ipo.id);
   return this.ht.put(`http://localhost:8080/ipo`,ipo);
  }
  getIpoById(id:number): Observable<Ipos>{
    console.log("id:::service "+id);
    return this.ht.get(`http://localhost:8080/ipo/${id}`);
  }
}
