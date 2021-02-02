import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './services/weather.service';
import { IpServiceService } from './services/ip-service.service';
import{ RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { from } from 'rxjs';

const appRoutes = [
  {
    path:'',component:ForecastComponent
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService, IpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
