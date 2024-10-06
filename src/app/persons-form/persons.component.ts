import { PersonsService } from './../services/persons.service';
import { catchError, Observable, of, pipe } from 'rxjs';
import {Person} from './../model/person';
import { AfterViewInit, Component, ViewChild, Pipe } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-persons-form',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatDialogModule, MatPaginatorModule, MatProgressSpinnerModule, MatCardModule, CommonModule, MatToolbarModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss'
})

export class PersonsComponent {

  persons$: Observable<Person[]>;

  displayedColumns: string[] = ['first_name', 'last_name', 'birthdate'];

  constructor(private personsServices: PersonsService, public dialog: MatDialog)  {

   this.persons$ = personsServices.getAll().pipe(
    catchError( error => {
      this.onError('Erro ao carregar lista de professores')
      return of([])} )

    );

   //this.personsServices.getAll().subscribe(res => this.persons = res );


  }

  onError(erroMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMessage})}


  AfterViewInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   //this.personsServices.getAll().subscribe(res => this.persons = res );

  }





}
