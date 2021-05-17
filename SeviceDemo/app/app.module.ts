import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { CustomerComponent } from './customer/customer.component';
import { EmploysearchComponent } from './employsearch/employsearch.component';
import { FormsModule } from '@angular/forms';
import { CustomersearchComponent } from './customersearch/customersearch.component';
import { MenuComponent } from './menu/menu.component';
import { Employ } from './employ';
import { RouterModule, Routes } from '@angular/router';
import { UsersearchComponent } from './usersearch/usersearch.component';


// const appRoutes : Routes = [
//   {path:'employ',component:EmployComponent},
//   {path:'',component:MenuComponent},

  
// ]

const appRoutes : Routes = [
 
  {path:'',component:MenuComponent},
  {path:'menu',component:MenuComponent,

  children : [
    {path:'user',component:UserComponent,outlet:'data'},
    {path:'customer',component:CustomerComponent,outlet:'data'},
  ]
  }
  ]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    CustomerComponent,
    EmploysearchComponent,
    CustomersearchComponent,
    MenuComponent,
    UsersearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
