import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityFormComponent } from './components/city-form/city-form.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';

const routes: Routes = [
  { path:'', redirectTo:'/forecast',pathMatch:'full' },
  { path:'forecast', component:ForecastComponent },
  { path:'cityWeather',component:CityWeatherComponent },
  { path:'cityForm', component:CityFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
