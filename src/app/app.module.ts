import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './services/weather.service';
import { IpServiceService } from './services/ip-service.service';


import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { from } from 'rxjs';
import { CityFormComponent } from './components/city-form/city-form.component';
import { FormsModule } from '@angular/forms';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { PlotComponent } from './components/plot/plot.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForecastComponent,
    CityFormComponent,
    CityWeatherComponent,
    PlotComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'forecast', component:ForecastComponent },
      { path:'cityWeather',component:CityWeatherComponent },
      { path:'cityForm', component:CityFormComponent }
    ]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [WeatherService, IpServiceService],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule, ForecastComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
