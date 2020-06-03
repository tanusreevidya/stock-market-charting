import { Injectable, Inject } from '@angular/core';
import { Sector } from 'src/app/models/sector';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  httpUrl = 'http://localhost:8006/sector/';
  sector : Sector;
 constructor(@Inject (HttpClient) private httpClient) { }

 getAllSectors(){
   return this.httpClient.get(this.httpUrl);
 }

 saveSector(sec : Sector){
   return this.httpClient.post(this.httpUrl , sec);
 }
 deleteSector(id: number): Observable<Sector>{
   return this.httpClient.delete(`http://localhost:8006/sector/${id}`);
 }
 updateSectorInfo(sec : Sector): Observable<Sector>{
   return this.httpClient.put(this.httpUrl,sec);
  }
  getSectorById(id:number): Observable<Sector>{
    //console.log("id:::service "+id);
    return this.httpClient.get(`http://localhost:8006/sector/${id}`);
  }
}
