import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private httpClient:HttpClient) { }

  private readonly API = 'http://localhost:8080/api/v1/persons';

  Lista(){
    return this.httpClient.get<Person[]>(this.API).pipe(tap(persons=>console.log(persons)));
  }

}


