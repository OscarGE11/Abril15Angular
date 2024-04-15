import { Loan } from "./Loan";

export interface ConventionalLoan extends Loan {

    months:number

    
}

export function calculateConventionalLoanPayment(conventionalLoan:ConventionalLoan) {
        
    let interest = conventionalLoan.interestRate / 1200; 
    let payment:string;
    payment = `${conventionalLoan.principal * interest / (1 - (Math.pow(1 / (1 + interest), conventionalLoan.months)))}`;

    return 'The conventional loan payment is ' + payment;
    
    }

    let myLoanConventional: ConventionalLoan = {
        principal: 30000,
        interestRate: 5,
        months:180
    };


    let conventionalPayment= calculateConventionalLoanPayment(myLoanConventional);
    