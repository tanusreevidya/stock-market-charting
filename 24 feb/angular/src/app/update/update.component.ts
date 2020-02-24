import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateUserForm :FormGroup;
  constructor(private formBuilder:FormBuilder,private serviceService:ServiceService,private router:Router) { }

  ngOnInit() {
    this.updateUserForm=this.formBuilder.group({
      id:[],
      username:['',Validators.required],
      password:['',Validators.required],

    });
    const id=localStorage.getItem('userId');
    if(+id>0){
      this.serviceService.getUserById(+id).subscribe(user=>{
        this.updateUserForm.patchValue(user);
      });
    }
  }

}
