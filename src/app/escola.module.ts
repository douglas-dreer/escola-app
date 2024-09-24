import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { EscolaRoutingModule } from './escola-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EscolaRoutingModule,
    MatToolbarModule,MatIconModule,MatCardModule
  ]
})

export class EscolaModule { }

