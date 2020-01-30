import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './login/users/users.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UpdateUserComponent } from './login/update-user/update-user.component';
import { ImportdataComponent } from './adminhome/importdata/importdata.component';
import { CompanydetailsComponent } from './adminhome/companydetails.com/companydetails.com.component';
import { HomeComponent } from './home/home.component';
import { AddcompanyComponent } from './adminhome/companydetails.com/addcompany/addcompany.component';
import { CompanyComponent } from './adminhome/company/company.component';


const routes: Routes = [
   { path: 'login', component: LoginComponent },
  { path: 'users', component:UsersComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'adminhome', component:AdminhomeComponent},
  { path: 'update-user', component:UpdateUserComponent},
  { path: 'importData', component:ImportdataComponent},
  { path: 'companydetails', component:CompanydetailsComponent},
  { path: 'AddCompany', component:AddcompanyComponent},
  { path: 'company', component:CompanyComponent},
  { path: '**', component: HomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
