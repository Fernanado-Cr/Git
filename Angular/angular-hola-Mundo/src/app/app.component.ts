import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludadorComponent } from "./saludador/saludador.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SaludadorComponent]
})
export class AppComponent {
  title = 'angular-hola-Mundo';
}
