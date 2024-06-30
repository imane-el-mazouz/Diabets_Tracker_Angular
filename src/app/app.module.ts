import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChartComponent } from './components/chart/chart.component';
import {HomeComponent} from "./components/home/home.component";

@NgModule({
  declarations: [


  ],
  imports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ChartComponent
  ],
  providers: [],

})
export class AppModule { }
