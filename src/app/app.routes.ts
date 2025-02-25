import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutComponent } from './pages/about/about.component';
import { WeatherComponent } from './pages/weather/weather.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // 🔹 Página de inicio
    { path: 'home', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'about', component: AboutComponent },
    { path: 'weather', component: WeatherComponent },
    { path: '**', redirectTo: '' }, // 🔹 Redirigir a la página de inicio
];
