import { PersonsService } from './../service/persons.service';
import { AppMaterialModule } from '../shared/shared.module';
import { Observable } from 'rxjs';
import {Person} from './../model/person';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSidenav} from '@angular/material/sidenav';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [AppMaterialModule,MatTableModule, MatPaginatorModule, MatSidenav, AppComponent],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss'
})

export class PersonsComponent    {

  persons: Person[]=[];

  displayedColumns: string[] = ['first_name', 'last_name', 'birthdate', 'created_at','updated_at'];

  constructor(private personsService: PersonsService){

   }

   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.personsService.getAll().subscribe(dados=> this.persons = dados);

   }

}
