import { Component } from '@angular/core';

@Component({
  selector: 'app-size',
  standalone: true,
  imports: [],
  templateUrl: './size.component.html',
  styleUrl: './size.component.css'
})
export class SizeComponent {
  estado:boolean = false;
  //tamanio_texto:string = "";

  tamanioTexto: string = 'medium';

  cambiarTamanioTexto(tamanio: string): void {
  this.tamanioTexto = tamanio;
  }

  }


