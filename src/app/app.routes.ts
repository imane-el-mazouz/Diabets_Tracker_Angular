import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {UpdateUserComponent} from "./user-form/update-form.component";
import {GlycemieListComponent} from "./glycemie-list/glycemie-list.component";
import {GlycemieFormComponent} from "./glycemie-form/glycemie-form.component";

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path:'deleteUser' ,component: UserListComponent},
  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'glycemies', component: GlycemieListComponent },
  { path: 'addGlycemie', component: GlycemieFormComponent },
  { path:'deleteUser' ,component: GlycemieListComponent},
  { path: '', redirectTo: '/glycemies', pathMatch: 'full' }
];
