import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.contactUsForm = this.formBuilder.group({
     username:['',Validators.required],
     country:['',Validators.required],
     subject:['',Validators.required]
    });

  }
  contactUs(){
    console.log(this.contactUsForm.value);
  }

}
