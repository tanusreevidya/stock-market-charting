import { Injectable } from '@angular/core';
import { Company } from '../../../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  httpUrl = 'http://localhost:3090/company/';
  company = Company;
  constructor(private httpClient: HttpClient) { }
  getAllCompany(){
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
  saveCompany(comp : Company): Observable<Company>{
    return this.httpClient.post<Company>(this.httpUrl , comp);
  }
  deleteCompany(id: number): Observable<Company>{
    return this.httpClient.delete<Company>(this.httpUrl + id);
  }
  updateCompanyInfo(comp : Company): Observable<Company>{
    return this.httpClient.put<Company>(this.httpUrl + comp.id, comp);
   }
   getCompanyById(id:number): Observable<Company>{
     return this.httpClient.get<Company>(this.httpUrl + id);
   }
}
