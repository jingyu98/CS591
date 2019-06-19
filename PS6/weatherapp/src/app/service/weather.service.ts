import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weather} from '../model/weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  endpoint = 'http://localhost:3000/weather';



  getWeathers(): Observable<Weather> {

    return this.httpClient.get<Weather>(this.endpoint );
  }
  addWeather(newWeather: Weather): Observable<any> {
    return this.httpClient.post<any>(this.endpoint,newWeather);
  }


  constructor(private httpClient: HttpClient) { }
}
