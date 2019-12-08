import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { FlightComponent } from './flight/flight.component';
import {FormsModule } from '@angular/forms'
import { HotelComponent } from './hotel/hotel.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HomeComponent,
    PackagesComponent,
    FlightComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
