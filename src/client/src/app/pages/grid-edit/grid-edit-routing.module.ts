import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridEditComponent } from './grid-edit.component';

const routes: Routes = [
  {
    path: '',
    component: GridEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridEditRoutingModule { }
