import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
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
  constructor(private userService:ServiceService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null),
     
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}
