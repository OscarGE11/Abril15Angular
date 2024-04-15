import { Component } from '@angular/core';
import { Loan, calculateInterestOnlyLoanPayment } from '../../modelo/Loan';
import { ConventionalLoan, calculateConventionalLoanPayment } from '../../modelo/ConventionalLoan';

@Component({
  selector: 'app-loan-payments',
  standalone: true,
  imports: [],
  templateUrl: './loan-payments.component.html',
  styleUrl: './loan-payments.component.css'
})
export class LoanPaymentsComponent {

  

} 

let myLoan: Loan = {
  principal: 30000,
  interestRate: 5
};

let myLoanConventional: ConventionalLoan = {
  principal:30000,
  interestRate:5,
  months:180
}


let interestOnlyPayment= calculateInterestOnlyLoanPayment(myLoan);
let conventionalPayment = calculateConventionalLoanPayment(myLoanConventional);
console.log(interestOnlyPayment);
console.log(conventionalPayment);