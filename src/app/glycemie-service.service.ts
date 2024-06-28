import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Glycemie } from '../model/glycemie';
@Injectable({
  providedIn: 'root'
})
export class GlycemieService {
  private apiUrl = 'http://localhost:8080/api/glycemies';
  constructor(private http: HttpClient) { }

  findAll(): Observable<Glycemie[]> {
    return this.http.get<Glycemie[]>(this.apiUrl);
  }

  save(glycemie: Glycemie): Observable<Glycemie> {
    return this.http.post<Glycemie>(this.apiUrl , glycemie)
  }


  deleteGlycemie(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getGlycemie(id : number): Observable<Glycemie>{
    return this.http.get<Glycemie>(`${this.apiUrl}/${id}`);
  }

  updateGlycemie(id : number ,glycemie : Glycemie) :Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}` ,glycemie)
  }
}
