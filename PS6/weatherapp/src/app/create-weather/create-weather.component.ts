import { Component, OnInit } from '@angular/core';
import { Weather } from '../model/weather';
import { WeatherService } from '../service/weather.service';


@Component({
  selector: 'app-create-weather',
  templateUrl: './create-weather.component.html',
  styleUrls: ['./create-weather.component.css']
})
export class CreateWeatherComponent implements OnInit {

  myWeather = {
    name: '',
    weather: {
      description: ''},
    main: {
      humidity: ''},
  };

  addWeather(): void{
    const newWeather: Weather = {
      name: this.myWeather.name,
      weather: {
        description: this.myWeather.weather.description
      },
      main: {
        humidity: this.myWeather.main.humidity
      },
    };

    this.weatherService.addWeather(newWeather)
      .subscribe();
  }
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

}
