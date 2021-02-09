export interface MonthlyRateInput {
    loanAmount: number;
    numberOfMonths: number;
    interestRate: number;
    finalPayment?: number;
}
