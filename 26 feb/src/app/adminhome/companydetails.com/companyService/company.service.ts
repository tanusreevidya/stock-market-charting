import { Injectable, Inject } from '@angular/core';
import { Company } from '../../../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  httpUrl = 'http://localhost:8080/company/';
  company = Company;
  constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }
  getAllCompany(){
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
  saveCompany(comp : Company): Observable<Company>{
    return this.ht.post(`http://localhost:8080/company` , comp);
  }
  deleteCompany(id: number): Observable<Company>{
    return this.ht.delete(`http://localhost:8080/company/${id}`);
  }
  updateCompanyInfo(comp : Company): Observable<Company>{
    console.log("companyid in update service ::" +comp.id);
    return this.ht.put(`http://localhost:8080/company`, comp);
   }
   getCompanyById(id:number): Observable<Company>{
    console.log("companyid in service ::" +id);
     return this.ht.get(`http://localhost:8080/company/${id}`);
   }
}
