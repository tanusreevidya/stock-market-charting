import { Injectable, Inject } from '@angular/core';
import { Company } from '../../../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  httpUrl = environment.host+'company-service/company/';
  company = Company;
  constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }
  getAllCompany(){
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
  saveCompany(comp : Company): Observable<Company>{
    return this.ht.post(environment.host+'company-service/company' , comp);
  }
  deleteCompany(id: number): Observable<Company>{
    return this.ht.delete(environment.host+`company-service/company/${id}`);
  }
  updateCompanyInfo(comp : Company): Observable<Company>{
    console.log("companyid in update service ::" +comp.id);
    return this.ht.put(environment.host+`company-service/company`, comp);
   }
   getCompanyById(id:number): Observable<Company>{
    console.log("companyid in service ::" +id);
     return this.ht.get(environment.host+`company-service/company/${id}`);
   }
}
