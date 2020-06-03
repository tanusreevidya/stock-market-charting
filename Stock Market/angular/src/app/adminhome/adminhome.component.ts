import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  importData(){
    this.router.navigate(['importData']);
  }
  companyDetails(){
    this.router.navigate(['companyList']);
  }
  stockExchanges(){
    this.router.navigate(['stockexchange']);
  }
  iPO(){
       this.router.navigate(['ipolist']);
  }
  sector(){
    this.router.navigate(['sectorList']);
  }
  users(){
    this.router.navigate(['users']);
  }

}
