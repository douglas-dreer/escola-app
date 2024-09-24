import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private URL_BASE = 'http://localhost:8080/api/v1'

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any> {
    const URI = `${this.URL_BASE}/contacts`
    return this.http.get(URI)
  }

  create (contact: any): Observable<any> {
    const URI = `${this.URL_BASE}/contacts`
    return this.http.post(URI, contact)
  }  
}
