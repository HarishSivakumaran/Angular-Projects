import { WeatherData } from './../model/weather-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class WeatherService {
  private baseURL: string =
    'https://weatherapi-com.p.rapidapi.com/current.json';

  // weatherUpdate : EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  getWeatherData(sCity: string) {
    return this.http.get(this.baseURL, {
      headers: {
        'X-RapidAPI-Key': '986c83b466msha8237d31be31e9fp1368aajsnc03ea50ea275',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
      params: { q: sCity },
    });
  }
}
