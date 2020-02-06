import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/users';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService,private router:Router) { }

  ngOnInit() {
    this.updateUserForm = this.formBuilder.group({
      id:[],
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      phone:['',Validators.required]
    });
  
  const id = localStorage.getItem('userId');
  if(+id > 0){
    this.serviceService.getUserById(+id).subscribe(user => {
           this.updateUserForm.patchValue(user);
    });
  }
}

UpdateUser(user : User){
  this.serviceService.updateUserInfo(this.updateUserForm.value).subscribe(u => {
    this.router.navigate(['users']);
  });
}
}