import { WeatherData, Location } from './model/weather-data.model';
import { WeatherService } from './services/weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weather-app';
  city: string = 'Bangalore';

  weatherData: any;

  constructor(public weatherService: WeatherService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.weatherService.getWeatherData(this.city).subscribe((oWeatherData) => {
      this.weatherData = oWeatherData;
      this.city = this.weatherData.location.name;
    });
  }

  getWeatherData(oInput: HTMLInputElement) {
    this.weatherService.getWeatherData(oInput.value);
  }
}
