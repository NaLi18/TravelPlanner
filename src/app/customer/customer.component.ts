import { Component, OnInit } from '@angular/core';
import { TravelPlannerService} from '../travel-planner.service'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  articles;
  constructor(private travelPlanner: TravelPlannerService) { }

  ngOnInit() {
    this.travelPlanner.getHotel().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    })
  }
}
