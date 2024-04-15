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
    lenguajesProgramacion:["C++","Java","JS","Python","Rust",
  "Cobol"],
  generos:["Mujer","Hombre","Otros"]
  }
  genero:string="";
  nacionalidad:string="";
  lenguajesSeleccionados: {[key: string]: boolean} = {};

  constructor() {
    
    this.datos.lenguajesProgramacion.forEach((lenguaje) => {
      this.lenguajesSeleccionados[lenguaje] = false;
    });
  }



  mostrarInformacion(): void {
    const lenguajesSeleccionados = Object.keys(this.lenguajesSeleccionados)
      .filter(key => this.lenguajesSeleccionados[key])
      .join(', ');
  
    let mensaje = `Genero: ${this.genero}
  Nacionalidad: ${this.nacionalidad}
  Lenguajes de programación: ${lenguajesSeleccionados}`;
  
    alert(mensaje);
  }
  
  

}
