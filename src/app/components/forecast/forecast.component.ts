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
  obsTime:any;
  cityValue:any;
  value:any;

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
    this.value = localStorage.getItem('added');
    if(this.value == "ok"){
      this.cityValue = localStorage.getItem('cityName');
    } 
    // this.getLocation();
    this.getIPfunc();
       
  }

  
  getIPfunc(){
    // get the user location details  
    this.ip.getIpAddress().subscribe((res:any)=>{  
      this.ipAddress=res.ip;  
      this.city=res.city;
      this.country=res.country;
      
      this.getWeatherFunc();
    });  
  }

  getWeatherFunc(){
    // get the weather detials based on user location
    this._weatherService.getWeatherData(this.ipAddress).subscribe(
      response => {
        this.weatherData = response;
        this.setData();

      }
    )
  }

  setData(){
    this.sunset = this.weatherData.data.weather[0].astronomy[0].sunset;
    this.obsTime = this.weatherData.data.current_condition[0].observation_time;
   
    this.isDay = (this.obsTime < this.sunset); //TODO test this at day time
  }


}