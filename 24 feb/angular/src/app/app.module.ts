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
    UpdateipoComponent
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
