import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { delay, first, tap } from 'rxjs';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonsService  {

  constructor(private httpClient:HttpClient) { }

  private readonly API = 'http://localhost:8080/api/v1/persons';

  getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.API).pipe(
      first(),
      tap(persons=>console.log(persons)));
  }


}


