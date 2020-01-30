import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ServiceService } from '../service.service';
import { USERS } from '../models/mock-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  //users : USERS;
  constructor(private service:ServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  addUser(){
    this.service.saveUser(this.loginForm.value).subscribe(data => {
      console.log('User Inserted Successfully');
    });
 }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}

