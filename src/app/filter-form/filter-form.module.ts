import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterFormComponent } from './filter-form.component';
import { Routes, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';


const routes: Routes = [
  {
    path: '',
    component: FilterFormComponent
  }
];

@NgModule({
  declarations: [FilterFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  exports: [FilterFormComponent, RouterModule]
})
export class FilterFormModule { }
