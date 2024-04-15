import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoanPaymentsComponent } from './componentes/loan-payments/loan-payments.component';
import { ArmaTuPCComponent } from './componentes/arma-tu-pc/arma-tu-pc.component';
import { ReservaVuelosComponent } from './componentes/reserva-vuelos/reserva-vuelos.component';
import { UsandoDirectivasComponent } from './componentes/usando-directivas/usando-directivas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoanPaymentsComponent,ArmaTuPCComponent,ReservaVuelosComponent,UsandoDirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril15Angular';
}
