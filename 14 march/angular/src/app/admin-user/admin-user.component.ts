import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})

export class AdminUserComponent implements OnInit {
isAdmin:boolean;
  constructor(private service:ServiceService) {
    this.isAdmin=service.isAdmin();
   }
  ngOnInit() {
  }
}

