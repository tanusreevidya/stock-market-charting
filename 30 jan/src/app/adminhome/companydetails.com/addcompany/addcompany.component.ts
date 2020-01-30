import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  addcompany : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addcompany = this.formBuilder.group({
      sector:['',Validators.required],
      companyname:['',Validators.required],
      ceo:['',Validators.required],
      bod:['',Validators.required],
      stocklist:['',Validators.required],
      turnover:['',Validators.required],
    })
  }
   addCompany(){
     console.log(this.addcompany.value);
   }
}
