import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class TravelPlannerService {
  //API_KEY:string ="e06f5b3da2be4501af757078cf03a985";
  constructor(private httpClient: HttpClient) { }

  public getHotel(){
    return this.httpClient.get<Config>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e06f5b3da2be4501af757078cf03a985');
  }
  
  public getHotels(id:string){
    return this.httpClient.get<Config>('http://localhost:3000/hotel/'+id)
  }

  public getFlights(id:string){
    return this.httpClient.get<Config>(''+id)
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}