import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  weatherData:any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(){
    this._weatherService.getWeatherData().subscribe(
      response => {
        console.log(response);
        this.weatherData = response;
      }
    )

  }

}
