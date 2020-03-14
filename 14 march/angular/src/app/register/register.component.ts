import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { User } from '../models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup
  users:User[] = [];
  user:User;

  constructor(private formBuilder: FormBuilder,private service:ServiceService) { }

  ngOnInit() {
  this.registrationForm = this.formBuilder.group({
    id:['',Validators.required],
    username:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    phone:['',Validators.required],
  });
  this.service.getAllUsers().subscribe(u =>{this.users = u;})
}

emailValid(mail : String){
  for(let user of this.users){
    if(user.email===mail){
      return false;
    }
  }
  return true;
}


addUser(){
  let e = this.registrationForm.controls.email.value;
  if(this.emailValid(e)){
    this.service.saveUser(this.registrationForm.value).subscribe(data => {
       this.user = data;
       alert('Registered Successfully');
       this.registrationForm.reset()
      }); }
      else
      {
        alert('already Email exsits')
        this.registrationForm.reset()
      }

}
  onSubmit(){
    // this.service.reg().subscribe(dt =>{
    //   console.log("coming status::::" +dt.reg);
    // })
    console.log(this.registrationForm.value);
  }
}