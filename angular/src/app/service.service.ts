import { Injectable } from '@angular/core';
import { USERS } from '../app/models/mock-user'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user = USERS;
  constructor() { }
  getAllUsers(){
    return this.user;
  }
}
