import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usando-directivas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usando-directivas.component.html',
  styleUrl: './usando-directivas.component.css'
})
export class UsandoDirectivasComponent {


  datos={
    nacionalidades:["Española","Argentina","Ecuatoriana",
    "Marroquí","Venezolana","Polaca","Rusa"],
    lenguajesProgramacion:["C++","Java","JS","Python"],
  generos:["Mujer","Hombre","Otros"]
  }
  genero:string="";
  nacionalidad:string="";
  
  lenguajesSeleccionados: boolean[] = new Array(
    this.datos.lenguajesProgramacion.length).fill(false);


  mostrarInformacion(): void {
   console.log(this.lenguajesSeleccionados);
    let mensaje = `Genero: ${this.genero}
Nacionalidad: ${this.nacionalidad}
Lenguajes de programación: ${this.datos.lenguajesProgramacion
    .filter((_, i) => this.lenguajesSeleccionados[i])
    .join(', ')}`;
  
    alert(mensaje);
  }
  
  

}
