import { Injectable, Inject } from '@angular/core';
import { Ipos } from "../../models/ipos";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpoServiceService {

  httpUrl = environment.host + `initial-public-offerings-service/ipo/`;
  ipo =Ipos;
 constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }

 getAllIpos(){
   return this.httpClient.get<Ipos[]>(this.httpUrl);
 }

 saveIpo(ipo : Ipos): Observable<Ipos>{
   return this.ht.post(this.httpUrl , ipo);
 }
 deleteIpo(id: number): Observable<Ipos>{
   return this.ht.delete(environment.host + `initial-public-offerings-service/ipo/${id}`);
 }
 updateIpoInfo(ipo : Ipos): Observable<Ipos>{
   console.log("id:::service update user:"+ipo.id);
   return this.ht.put(environment.host + `initial-public-offerings-service/ipo`,ipo);
  }
  getIpoById(id:number): Observable<Ipos>{
    console.log("id:::service "+id);
    return this.ht.get(environment.host + `initial-public-offerings-service/ipo/${id}`);
  }
}
