import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companydetails.com',
  templateUrl: './companydetails.com.component.html',
  styleUrls: ['./companydetails.com.component.css']
})
export class CompanydetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addCompany(){
    this.router.navigate(['Addcompany']);
  }
  manageCompany(){
    this.router.navigate(['companyList']);
  }
 

}
