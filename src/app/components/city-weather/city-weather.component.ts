import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  nameValue:any;
  cityWeather:any;

  constructor(private _weatherService:WeatherService) { }

  ngOnInit(): void {
    console.log('in city weather');
    this.nameValue = localStorage.getItem('cityName');
    
    console.log('city name in new component:');
    console.log(this.nameValue);
    this.getCityWeather();
  }

  getCityWeather(){
    // get the weather detials based on user input
    this._weatherService.getWeather(this.nameValue).subscribe(
      response => {
        console.log(response);
        this.cityWeather = response;
        //this.setData();

      }
    )
  }

}
