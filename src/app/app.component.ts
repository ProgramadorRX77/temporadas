import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SizeComponent } from "./size/size.component";
import { MesesComponent } from "./meses/meses.component";
import { CommonModule, NgFor } from '@angular/common';
import { MensajeComponent } from "./mensaje/mensaje.component";
import { EstacionesComponent } from "./estaciones/estaciones.component";
import { CallerComponentComponent } from "./caller-component/caller-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SizeComponent, MesesComponent, CommonModule, NgFor, MensajeComponent, EstacionesComponent, CallerComponentComponent]
})
export class AppComponent {
  title = 'temporadas';
}
