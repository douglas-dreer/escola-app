import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  exports: [
    MatToolbarModule,MatIconModule,MatCardModule,MatTableModule
  ]
})
export class AppMaterialModule { }
