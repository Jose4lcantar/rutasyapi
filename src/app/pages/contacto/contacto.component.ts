import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true, // Importante para Standalone
  imports: [CommonModule, FormsModule], // Importamos FormsModule aquí
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  sendEmail() {
    if (!this.name || !this.email || !this.message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const subject = `Mensaje de ${this.name}`;
    const body = `Nombre: ${this.name}\nEmail: ${this.email}\n\nMensaje:\n${this.message}`;

    const mailtoLink = `mailto:joseam.ti22@utsjr.edu.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank'); // Abre el cliente de correo predeterminado en una nueva pestaña
  }
}
