import { Component,HostBinding,Input} from '@angular/core';
import { DestinoViaje } from '../../src/app/models/destino-viaje.model';



@Component({
  selector: 'app-destino-viaje',
  standalone: true,
  imports: [],
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.scss'
})
export class DestinoViajeComponent {
  @Input()destino: DestinoViaje;
  @HostBinding('attr.class') ccsClass ='col-md-4';
  constructor(){
    
  }
  ngOnInit(){

  }

}
