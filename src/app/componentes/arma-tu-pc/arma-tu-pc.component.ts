import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arma-tu-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './arma-tu-pc.component.html',
  styleUrl: './arma-tu-pc.component.css'
})
export class ArmaTuPCComponent {

tipoRam:string[]=["RAM32","RAM16","RAM8"]
tipoProcesador:string[]=["Corei9N8","Ryzen7 5800X","Corei7-13500","Ryzen5 3800G"]
tipoDiscoDuro:string[]=["HDD","SSD"]
tipoFuenteAlimentacion:string[]=["500","550","700","900"]

ram:string="";
procesador:string="";
tarjetaGrafica:boolean=false;
discoDuro:string="";
fuenteAlimentacion:string="";

mostrarInformacion():void{
  let tieneTarjeta:string="";
  if (this.tarjetaGrafica==true){
     tieneTarjeta="Sí";

  } else {
    tieneTarjeta="No";
  }

  let mensaje = `Memoria RAM: ${this.ram}
Tipo de procesador: ${this.procesador}
¿Tiene Gráfica?: ${tieneTarjeta}
Disco duro: ${this.discoDuro}
Fuente de alimentación: ${this.fuenteAlimentacion}`;
alert(mensaje);
}

}
