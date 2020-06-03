import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {
  addcompany:FormGroup;
  updatecompany: any;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {this.addcompany=this.formBuilder.group({
    sector:['',Validators.required],
    companyname:['',Validators.required],
    ceo:['',Validators.required],
    bod:['',Validators.required],
    turnover:['',Validators.required],
  });
}
updateCompany()
{
    console.log('User Inserted Successfully' );
}

onSubmit()
{
  console.log(this.updatecompany.value);
}

}