import { Component, OnInit } from '@angular/core';
import {TravelPlannerService} from '../travel-planner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flights;
  constructor(private travelPlanner: TravelPlannerService,private route: ActivatedRoute) { }
  someThing ="";
  id="";
  searchNow() :void{
    console.log(this.someThing);
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.travelPlanner.getFlights(this.id).subscribe((data) => {
      console.log(data);
      this.flights = data['results'];
    })
  }

}
