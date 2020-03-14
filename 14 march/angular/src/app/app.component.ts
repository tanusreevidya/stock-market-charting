import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
import { from } from 'rxjs';
import { AuthServiceService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLoggedIn : boolean = false;
  constructor(private authService: AuthServiceService){}

    ngDoCheck(){
         this.userLoggedIn = this.authService.isUserLoggedIn();
        
    }
  
  }
