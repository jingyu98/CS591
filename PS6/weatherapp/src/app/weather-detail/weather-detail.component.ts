import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../model/weather';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  @Input() selectedWeather: Weather;
  constructor() { }

  ngOnInit() {
  }

}
