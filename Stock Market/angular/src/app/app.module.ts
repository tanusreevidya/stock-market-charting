import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UsersComponent } from './login/users/users.component';  
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceService } from './service.service';
import { UpdateUserComponent } from './login/update-user/update-user.component';
import { ImportdataComponent } from './adminhome/importdata/importdata.component';
import { CompanydetailsComponent } from './adminhome/companydetails.com/companydetails.com.component';
import { HomeComponent } from './home/home.component';
import { AddcompanyComponent } from '../app/adminhome/companydetails.com/addcompany/addcompany.component';
import { CompanyComponent } from './adminhome/company/company.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ComparecompanyComponent } from './userhome/comparecompany/comparecompany.component';
import { UpdatecompanyComponent } from './adminhome/companydetails.com/updatecompany/updatecompany.component';
import { StockexchangeComponent } from './adminhome/stockexchange/stockexchange.component';
import { AddStockExchangeComponent } from './adminhome/stockexchange/add-stock-exchange/add-stock-exchange.component';
import { IpoComponent } from './adminhome/ipo/ipo.component';
import { ComparesectorComponent } from './userhome/comparesector/comparesector.component';
import { UseripoComponent } from './userhome/useripo/useripo.component';
import { StockexchangetableComponent } from './adminhome/stockexchangetable/stockexchangetable.component';
import { IpolistComponent } from './adminhome/ipo/ipolist/ipolist.component';
import { UpdateipoComponent } from './adminhome/ipo/updateipo/updateipo.component';
import { ActivateComponent } from './activate/activate.component';
import { SectorComponent } from './adminhome/sector/sector.component';
import { AddsectorComponent } from './adminhome/sector/addsector/addsector.component';
import { UpdatesectorComponent } from './adminhome/sector/updatesector/updatesector.component';
import { ChartsComponent } from './charts/charts.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { AdminnavComponent } from './sidenavbar/adminnav/adminnav.component';
import { UsernavComponent } from './sidenavbar/usernav/usernav.component';
import { UsercompanyComponent } from './userhome/usercompany/usercompany.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PolicyComponent } from './policy/policy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AngularMaterialModule } from './angular-material.module';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { LogoutComponent } from './logout/logout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateprofileComponent } from './user-profile/updateprofile/updateprofile.component';
import { ChangepasswordComponent } from './user-profile/changepassword/changepassword.component';



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
    CompanyComponent,
    UserhomeComponent,
    ComparecompanyComponent,
    UpdatecompanyComponent,
    StockexchangeComponent,
    AddStockExchangeComponent,
    IpoComponent,
    ComparesectorComponent,
    UseripoComponent,
    StockexchangetableComponent,
    IpolistComponent,
    UpdateipoComponent,
    ActivateComponent,
    SectorComponent,
    AddsectorComponent,
    UpdatesectorComponent,
    ChartsComponent,
    HighchartsChartComponent,
    AdminnavComponent,
    UsernavComponent,
    UsercompanyComponent,
    ContactUsComponent,
    PolicyComponent,
    AdminUserComponent,
    LogoutComponent,
    UserProfileComponent,
    UpdateprofileComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatInputModule,
    // MatAutocompleteModule,
    // AngularMaterialModule
  ],
  providers: [ServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
