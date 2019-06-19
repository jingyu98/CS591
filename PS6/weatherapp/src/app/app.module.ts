import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";

import { CreateWeatherComponent } from './create-weather/create-weather.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateWeatherComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
