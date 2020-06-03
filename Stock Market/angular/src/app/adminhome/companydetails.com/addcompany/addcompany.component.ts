import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../companyService/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  addCompanyForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private companyService:CompanyService, private router: Router) { }

  ngOnInit() {
    this.addCompanyForm = this.formBuilder.group({
      id:['',Validators.required],
      sector:['',Validators.required],
      companyname:['',Validators.required],
      ceo:['',Validators.required],
      bod:['',Validators.required],
     // stockList:['',Validators.required],
      turnover:['',Validators.required],
    })
  }
   addCompany(){
    this.companyService.saveCompany(this.addCompanyForm.value).subscribe(data => {
      console.log('Company Inserted Successfully');
    });
    this.router.navigate(['companyList']);
   }
}
