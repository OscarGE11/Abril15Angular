import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserva-vuelos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reserva-vuelos.component.html',
  styleUrl: './reserva-vuelos.component.css'
})
export class ReservaVuelosComponent {

  datosViajes={
    origenes:["Madrid","Barcelona","Bilbao","Sevilla"],
    destinos:["Italia","Francia","Suiza","Belgica"]
  }

  origen:string="";
  destinos:string="";
  fechaIda:string="";
  fechaVuelta:string="";
  numeroPasajeros:number=0;

  

  mostrarInfo():void{
   let mensaje=`Origen: ${this.origen}
Destinos: ${this.destinos}
Fecha de Ida: ${this.fechaIda}
Fecha de Vuelta: ${this.fechaVuelta}
Numero de Pasajeros: ${this.numeroPasajeros}`;
    alert(mensaje);
  }
}
