import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { CompanyService } from '../companyService/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {

  updateCompanyForm:FormGroup;
  constructor(private formBuilder: FormBuilder, private companyService:CompanyService, private router:Router) { }

  ngOnInit() {
    this.updateCompanyForm = this.formBuilder.group({
      id:[],
      sector:['',Validators.required],
      companyname:['',Validators.required],
      ceo:['',Validators.required],
      bod:['',Validators.required],
      //stockList:['',Validators.required],
      turnover:['',Validators.required],
    });
    const id = localStorage.getItem('comId');
    console.log("updatecompany::"+id)
    if(+id > 0){
    this.companyService.getCompanyById(+id).subscribe(com => {
           this.updateCompanyForm.patchValue(com);
    });
  }
  
  }
  updateTheCompany(com : Company){
    this.companyService.updateCompanyInfo(this.updateCompanyForm.value).subscribe(u => {
      this.router.navigate(['companyList']);
    });
  }

}
