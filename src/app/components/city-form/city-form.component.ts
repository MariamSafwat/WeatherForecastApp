import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {

  cityName:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  DisplayCityWeather(){
    console.log(this.cityName);
    // check if user input city name then navigate to city weather
    if(this.cityName == null){
      alert('please enter city name');
    }
    else{
      localStorage.setItem('cityName', JSON.stringify(this.cityName));
      localStorage.setItem('added', JSON.stringify('ok'));
      this.router.navigate(['cityWeather']);
    }   
  }

}
