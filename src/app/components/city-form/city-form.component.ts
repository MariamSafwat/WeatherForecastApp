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
    localStorage.setItem('cityName', JSON.stringify(this.cityName));
    this.router.navigate(['forecast']);
  }

}
