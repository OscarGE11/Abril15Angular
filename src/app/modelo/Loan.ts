export interface Loan {
    principal:number,
    interestRate:number

        
}

    


export function calculateInterestOnlyLoanPayment(loanTerms: Loan) {

    let interest = loanTerms.interestRate / 1200; 
    
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);

    }

    



