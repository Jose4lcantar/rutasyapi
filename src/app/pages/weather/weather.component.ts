import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [ CommonModule,FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city = 'Madrid'; 
  currentWeather: any;
  forecast: any[] = [];
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getCurrentWeather(this.city).subscribe(
      (data) => {
        this.currentWeather = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Ciudad no encontrada, inténtalo de nuevo.';
      }
    );

    this.weatherService.getForecast(this.city).subscribe(
      (data) => {
        this.forecast = data.list.filter((item: any, index: number) => index % 8 === 0); 
      },
      (error) => {
        this.errorMessage = 'Error al cargar el pronóstico';
      }
    );
  }

  searchWeather(): void {
    this.getWeather();
  }
}