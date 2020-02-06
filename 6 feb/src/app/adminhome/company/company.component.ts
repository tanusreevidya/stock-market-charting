import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../companydetails.com/companyService/company.service';
import { Company } from 'src/app/models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyservice: CompanyService, private router:Router) { }

  company : Company[];
  ngOnInit() {
    this.companyservice.getAllCompany().subscribe(data => {
      this.company = data;
  });
}
  deleteCompany(comp : Company){
    this.companyservice.deleteCompany(comp.id).subscribe();
    this.company = this.company.filter(c => comp != comp);
    this.router.navigate(['companyList'])
  }
  updateCompany(comp : Company){
    localStorage.removeItem('comId');
    localStorage.setItem('comId', comp.id.toString());
    this.router.navigate(['updatecompany']);
  }

}

