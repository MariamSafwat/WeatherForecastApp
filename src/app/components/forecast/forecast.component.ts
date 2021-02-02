import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherService } from '../../services/weather.service'
import { IpServiceService } from '../../services/ip-service.service';



@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  weatherData:any;
  ipAddress:any;
  city:any;
  country:any;
  x:any;
  isDay:any;
  sunset:any;
  timeNow:any;
  // lat:any;
  // lng:any;  

  constructor(private _weatherService:WeatherService ,private ip:IpServiceService) { }

  // getLocation(){
  //   this.ip.getLocation().then(resp=>{
  //     this.lng = resp.lng;
  //     this.lat = resp.lat;
  //     console.log(resp.lng);
  //     console.log(resp.lat);
  //     this.weatherData();
  //   })
  // }

  ngOnInit(){
    // this.getLocation();
    this.getIPfunc();
    //this.getWeatherFunc();
    
    
  }

  
  getIPfunc(){
    this.ip.getIpAddress().subscribe((res:any)=>{  
      this.ipAddress=res.ip;  
      this.city=res.city;
      this.country=res.country;
      console.log(res);
      console.log(this.city);
      console.log(this.ipAddress)
      this.getWeatherFunc();
    });  
  }

  getWeatherFunc(){
    this._weatherService.getWeatherData(this.ipAddress).subscribe(
      response => {
        console.log(response);
        this.weatherData = response;
        this.setData();

      }
    )
  }

  setData(){
    this.x = this.weatherData.data.current_condition[0].temp_C;
    this.sunset = this.weatherData.data.weather[0].astronomy[0].sunset;
    
    console.log(this.sunset);
    
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();
    console.log(currentTime);

    this.isDay = (currentTime < this.sunset); //TODO test this at day time
    
    console.log(this.isDay);
  }

  

}