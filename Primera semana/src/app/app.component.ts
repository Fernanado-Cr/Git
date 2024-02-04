import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, DestinoViajeComponent, ListaDestinosComponent]
})
export class AppComponent {
  title = 'Angular-Wishlist';
}
