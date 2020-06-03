import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User;
  constructor(private router: Router, private service:ServiceService,authService:AuthServiceService) { }
    
 
    ngOnInit() {
      const id = sessionStorage.getItem('userId');
      if(+id >0 ){
      this.service.getUserById(+id).subscribe(data =>{
        this.user=data;
      });
    }
    }
 
    updateUser(){
      this.router.navigate(['/updateProfile']);
    }
  
    updatePassword(){
      this.router.navigate(['/changePassword']);
    }

}
