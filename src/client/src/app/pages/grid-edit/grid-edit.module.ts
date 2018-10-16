import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridEditComponent } from './grid-edit.component';
import { GridEditRoutingModule } from './grid-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    GridEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    GridEditComponent
  ]
})
export class GridEditModule { }
