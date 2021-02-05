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
  sunset:any;
  obsTime:any;
  isDay:any;

  constructor(private _weatherService:WeatherService) { }

  ngOnInit(): void {
    
    this.nameValue = localStorage.getItem('cityName');
    this.getCityWeather();
  }

  getCityWeather(){
    // get the weather detials based on user input
    this._weatherService.getWeather(this.nameValue).subscribe(
      response => {
        this.cityWeather = response;
        this.setData();

      }
    )
  }

  setData(){
    // check if time is less than sunset time to display sun otherwise display moon icon
    this.sunset = this.cityWeather.data.weather[0].astronomy[0].sunset;
    this.obsTime = this.cityWeather.data.current_condition[0].observation_time;
    
    this.isDay = (this.obsTime < this.sunset); 
  }

}
