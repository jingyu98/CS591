import { Component } from '@angular/core';
import { Weather } from './model/weather';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapp';
  selectedWeather: Weather = null;
  weathers: Weather;

  getWeathers(): void{
    this.weatherService.getWeathers()
      .subscribe(weathers =>{
        this.weathers = weathers;
        console.log(`current weather fetched ${JSON.stringify(this.weathers)}`)
      });
  }

  displayWeatherDetail(weather: Weather){
    this.selectedWeather = weather;
  }


  constructor(private weatherService: WeatherService){

  }

  ngOnInit(){
    this.getWeathers();
  }
}
