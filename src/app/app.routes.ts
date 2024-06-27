import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {UpdateUserComponent} from "./user-form/update-form.component";

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path:'deleteUser' ,component: UserListComponent},
  { path: 'update/:id', component: UpdateUserComponent },
  { path: '', redirectTo: '/adduser', pathMatch: 'full' }
];
