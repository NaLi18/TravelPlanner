import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {TravelPlannerService} from '../travel-planner.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels;
  constructor(private travelPlanner: TravelPlannerService,private route: ActivatedRoute) { }
  someThing ="";
  id="";
  searchNow() :void{
    console.log(this.someThing);
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.travelPlanner.getHotels(this.id).subscribe((data) => {
      console.log(data);
      this.hotels = data['results'];
    })
  }
  
}
