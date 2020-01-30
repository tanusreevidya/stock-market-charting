import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../companydetails/addcompany/company.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyservice: CompanyService) { }

  company : Company[];
  ngOnInit() {
    // this.companyservice.getAllCompany().subscribe(data => {
    //   this.company = data;
  }

}
