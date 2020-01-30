import { Injectable } from '@angular/core';
import { Company } from '../../../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  company = Company;
  constructor() { }
  getAllCompany(){
    return this.company;
  }
}
