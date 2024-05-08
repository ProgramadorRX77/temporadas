import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-estaciones',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase],
  templateUrl: './estaciones.component.html',
  styleUrl: './estaciones.component.css'
})
export class EstacionesComponent {
mostar_opcion() {
  this.accion = !this.accion;
throw new Error('Method not implemented.');
}
  estaciones: string[] = ['otoño', 'invierno', 'primavera', 'verano'];
  estacion: string = '';
  accion:boolean = false;
}
