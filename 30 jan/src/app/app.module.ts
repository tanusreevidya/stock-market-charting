import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UsersComponent } from './login/users/users.component';  
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { UpdateUserComponent } from './login/update-user/update-user.component';
import { ImportdataComponent } from './adminhome/importdata/importdata.component';
import { CompanydetailsComponent } from './adminhome/companydetails.com/companydetails.com.component';
import { HomeComponent } from './home/home.component';
import { AddcompanyComponent } from '../app/adminhome/companydetails.com/addcompany/addcompany.component';
import { CompanyComponent } from './adminhome/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminhomeComponent,
    UsersComponent,
    UpdateUserComponent,
    ImportdataComponent,
    CompanydetailsComponent,
    HomeComponent,
    AddcompanyComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
