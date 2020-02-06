import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup

  constructor(private formBuilder: FormBuilder,private service:ServiceService) { }

  ngOnInit() {
  this.registrationForm = this.formBuilder.group({
    id:['',Validators.required],
    username:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    phone:['',Validators.required],
  });
}
addUser(){
  this.service.saveUser(this.registrationForm.value).subscribe(data => {
    console.log('User Inserted Successfully');
  });
}
  onSubmit(){
    console.log(this.registrationForm.value);
  }
}