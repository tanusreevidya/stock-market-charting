import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comparecompany',
  templateUrl: './comparecompany.component.html',
  styleUrls: ['./comparecompany.component.css']
})
export class ComparecompanyComponent implements OnInit {

  comparecompany: FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.comparecompany = this.formBuilder.group({
      company:['',Validators.required],
      stockExchange:['',Validators.required],
      companyname:['',Validators.required],
      datefrom:['',Validators.required],
      dateto:['',Validators.required]
    });
  }
  compareTheCompany(){
    console.log(this.comparecompany.value);
  }

}
