import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabFactoryModule } from './shared/tab-factory/tab-factory.module';
import { TabFactoryComponent } from './shared/tab-factory/tab-factory.component';
import { HotelModule } from './hotel/hotel.module';
import { FlightModule } from './flight/flight.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from "@angular/material-moment-adapter";
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    TabFactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    HotelModule,
    FlightModule,
    TabFactoryModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
