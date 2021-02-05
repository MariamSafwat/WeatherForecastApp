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
    console.log('city input:');
    console.log(this.cityName);
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
