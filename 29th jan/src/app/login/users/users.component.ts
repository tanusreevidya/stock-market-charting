import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { User } from '../../models/users'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service:ServiceService) { }
 users: User[];
  ngOnInit() {
    this.service.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

}
