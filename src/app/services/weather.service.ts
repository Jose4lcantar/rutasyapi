import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string;
}

interface ForecastResponse {
  list: {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      icon: string;
    }[];
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '83dbc65c1c92ba632830afbaea3bfad4';
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      `${this.baseUrl}/weather?q=${city}&units=metric&appid=${this.apiKey}`
    );
  }

  getForecast(city: string): Observable<ForecastResponse> {
    return this.http.get<ForecastResponse>(
      `${this.baseUrl}/forecast?q=${city}&units=metric&appid=${this.apiKey}`
    );
  }
}