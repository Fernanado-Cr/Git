import { Component} from '@angular/core';
import { DestinoViajeComponent } from "../destino-viaje/destino-viaje.component";
import { DestinoViaje } from '../../src/app/models/destino-viaje.model';

@Component({
    selector: 'app-lista-destinos',
    standalone: true,
    templateUrl: './lista-destinos.component.html',
    styleUrl: './lista-destinos.component.scss',
    imports: [DestinoViajeComponent]
})
export class ListaDestinosComponent {

  destinos: DestinoViaje[];
  constructor(){
    this.destinos=[];
  }
  ngOnInit(){
    
  }
  guardar(nombre:string, url:string) :boolean{
   
    this.destinos.push(new DestinoViaje(nombre,url));
    console.log(this.destinos);
    return false;

  }

}
