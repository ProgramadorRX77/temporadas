import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meses',
  standalone: true,
  imports: [NgFor],
  templateUrl: './meses.component.html',
  styleUrl: './meses.component.css'
})
export class MesesComponent {

  meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];


}
