import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list.component';
import { GridListRoutingModule } from './grid-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    GridListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    GridListComponent
  ]
})
export class GridListModule { }
