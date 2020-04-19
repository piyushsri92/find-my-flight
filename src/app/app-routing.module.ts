import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabFactoryComponent } from './shared/tab-factory/tab-factory.component';
import { HotelComponent } from './hotel/hotel.component';
import { FlightComponent } from './flight/flight.component';


const routes: Routes = [
  {
        path:'',
        redirectTo: 'flights',
        pathMatch: 'full' 
  },
  {
    path: 'flights',
    component: FlightComponent
  },
  {
    path: 'hotels',
    component: HotelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
