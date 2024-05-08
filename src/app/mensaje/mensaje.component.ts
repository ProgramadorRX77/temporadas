import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {
  accion:boolean = false;
  mensaje:string = "La Informática es la ciencia que ha cambiado al mundo";

  mostrarMensaje(){
   this.accion = !this.accion;
   this.mensaje;

  }
}
