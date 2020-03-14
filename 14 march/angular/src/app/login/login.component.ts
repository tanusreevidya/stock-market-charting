import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ServiceService } from '../service.service';
import { User } from '../models/users';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  users: User[];
  currentUser: User;
  //users : USERS;
  constructor(private service:ServiceService, private formBuilder: FormBuilder, private router:Router, private auth:AuthServiceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    
      username:['',Validators.required],
      password:['',Validators.required]
    });
    this.service.getAllUsers().subscribe(u => {
      this.users = u;
    });
  }

   isValid(){
    
       let username = this.loginForm.get("username").value;
       let password = this.loginForm.get("password").value;
       const result$ = this.auth.authenticate(username,password);

       result$.subscribe(data => {
        sessionStorage.setItem('userId', data.id.toString());
         console.log(data);
         if(data.userType == "ROLE_ADMIN"){
          this.router.navigate(['/adminhome']);
         }else{
        this.router.navigate(['/userhome']);
    }
   });
    }
  onSubmit(){ 
    console.log(this.loginForm.value);
  }

 }
  


