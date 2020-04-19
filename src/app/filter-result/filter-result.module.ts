import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterResultComponent } from './filter-result.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";


const routes: Routes = [
  {
    path: 'results',
    component: FilterResultComponent
  }
];

@NgModule({
  declarations: [FilterResultComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [FilterResultComponent, RouterModule]
})
export class FilterResultModule { }
