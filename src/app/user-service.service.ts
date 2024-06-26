// src/app/user-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user'; // Adjust the path if necessary

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Other CRUD methods (create, update, delete) can be added here
}
