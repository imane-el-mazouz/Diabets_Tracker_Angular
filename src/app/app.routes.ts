import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {GlycemieListComponent} from "./glycemie-list/glycemie-list.component";
import {GlycemieFormComponent} from "./glycemie-form/glycemie-form.component";
import {UpdateGlycemieFormComponent} from "./update-glycemie-form/update-glycemie-form.component";
import {UpdateUserFormComponent} from "./update-user-form/update-user-form.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path:'deleteUser' ,component: UserListComponent},
  { path: 'glycemies', component: GlycemieListComponent },
  { path: 'addGlycemie', component: GlycemieFormComponent },
  { path: 'update-glycemie/:id', component: UpdateGlycemieFormComponent },
  { path: 'update-user/:id', component: UpdateUserFormComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
