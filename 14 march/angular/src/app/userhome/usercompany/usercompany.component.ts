import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/adminhome/companydetails.com/companyService/company.service';

@Component({
  selector: 'app-usercompany',
  templateUrl: './usercompany.component.html',
  styleUrls: ['./usercompany.component.css']
})
export class UsercompanyComponent implements OnInit {

  company: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCompany().subscribe(data =>{
      this.company = data;
    });
  }

}
