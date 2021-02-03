import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable()
export class WeatherService {
  apiUrl;
  apikey = 'd6a570c670844f85a35124535213101';

  

  constructor(public http: HttpClient) { 
    this.apiUrl = 'https://api.worldweatheronline.com/premium/v1/weather.ashx';
   }
   
  getWeatherData(ipAddress:any) {
    //console.log(this.apiUrl + '?key=' + this.apikey + '&q=' + ipAddress + '&format=json');
    return this.http.get(this.apiUrl + '?key=' + this.apikey + '&q=' + ipAddress + '&format=json');
  }

  getWeather(city:any){
    console.log(this.apiUrl + '?key=' + this.apikey + '&q=' + city + '&format=json');
    return this.http.get(this.apiUrl + '?key=' + this.apikey + '&q=' + city + '&format=json');

  }

  
}