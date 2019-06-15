import { Component } from '@angular/core';
import {weatherdatas} from './Weatherdata-MOCK';
import {Weatherdata} from './Weatherdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapp';
  weathers = weatherdatas;
  private selectedWeather: Weatherdata;

  selectWeather(weather: Weatherdata) {
    this.selectedWeather = weather;
  }
}
