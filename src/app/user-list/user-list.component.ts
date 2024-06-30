import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user-service.service';
import { User } from '../../model/user';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink ]
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  updateUser(id: number, user: User): void {
    this.userService.updateUser(id, user).subscribe(()=> {
      this.users = this.users.filter(user => user.id !== id);
    });
  }
}
