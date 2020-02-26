import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { User } from '../../models/users'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }
 users: User[];
  ngOnInit() {
    this.service.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }
  deleteUser(user:User){
    this.service.deleteUser(user.id).subscribe();
    this.users = this.users.filter(u => user != user);
  }
  updateUser(user : User){
    console.log("id: "+user.id+"   ")
    //localStorage.removeItem('userId');
   // localStorage.setItem("usr",user.toString());
    localStorage.setItem('userId', user.id.toString());
    this.router.navigate(['update-user']);
  }

}
