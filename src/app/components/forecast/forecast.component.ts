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
      this.getWeatherFunc();
    });  
  }

  getWeatherFunc(){
    this._weatherService.getWeatherData(this.ipAddress).subscribe(
      response => {
        console.log(response);
        this.weatherData = response;
      }
    )


   }

}