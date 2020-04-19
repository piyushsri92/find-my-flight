import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import { FilterFormModule } from '../filter-form/filter-form.module';
import { FilterResultModule } from '../filter-result/filter-result.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [FlightComponent],
  imports: [
    CommonModule,
    FilterFormModule,
    FilterResultModule
  ],
  exports: []
})
export class FlightModule { }
