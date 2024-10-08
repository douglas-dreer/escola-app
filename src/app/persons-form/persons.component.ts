import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';
import { Person } from './../model/person';
import { PersonsService } from './../services/persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persons-form',
  standalone: true,
  imports: [MatTableModule, MatButtonModule,
    MatIconModule, MatDialogModule, MatPaginatorModule,
     MatProgressSpinnerModule, MatCardModule, CommonModule,
      MatToolbarModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss'
})

export class PersonsComponent {

  persons$: Observable<Person[]>;

  displayedColumns: string[] = ['first_name', 'last_name', 'birthdate', 'actions'];

  constructor(private personsServices: PersonsService, public dialog: MatDialog, private route: Router)  {

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

      onAdd(){
        this.route.navigate(['address']);
      }

  AfterViewInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   //this.personsServices.getAll().subscribe(res => this.persons = res );

  }





}
