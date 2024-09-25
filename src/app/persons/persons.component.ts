import { PersonsService } from './../service/persons.service';
import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../shared/shared.module';
import { Observable } from 'rxjs';
import {Person} from './../model/person';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})

export class PersonsComponent    {


  persons: Observable<Person[]>;


   displayedColumns: string[] = ['first_name', 'last_name', 'birthdate', 'created_at','updated_at'];

  constructor(private personsService: PersonsService){
    this.persons = this.personsService.getAll();
   }



}
