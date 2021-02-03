import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  value:any;

  constructor() { }

  ngOnInit(): void {
    console.log('in city weather');
    this.value = localStorage.getItem('cityName');
    
    console.log('city name in new component:');
    console.log(this.value);
  }

}
