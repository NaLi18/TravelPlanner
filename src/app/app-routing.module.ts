import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { HotelComponent } from './hotel/hotel.component';
import { FlightComponent } from './flight/flight.component';


const routes: Routes = [
  {path:'customers', component: CustomerComponent},
  {path:'', component: HomeComponent},
  {path: 'packages', component:PackagesComponent},
  {path:'hotel/:id',component:HotelComponent},
  {path: 'hotel', component:HotelComponent},
  {path:'flight', component:FlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
