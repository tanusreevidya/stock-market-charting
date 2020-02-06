import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { User } from '../models/users';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
  constructor(private service:ServiceService, private router :Router) { }
  users: User[];
   ngOnInit() {
     this.service.getAllUsers().subscribe(data => {
       this.users = data;
     });
   }
   deleteUser(user:User){
     this.service.deleteUser(user.id).subscribe();
     this.users=this.users.filter(u=>user !=user);
   }
   updateUser(user:User){
     localStorage.removeItem('userId');
     localStorage.setItem('userId',user.id.toString());
     this.router.navigate(['update-user']);
 
   }

}
