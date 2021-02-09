import { param } from 'express-validator';
import { MonthlyRateInput } from '../types/MonthlyRateInput';

/**
 * class LoanController
 */
export class LoanController {
	/**
	 * Calculates monthly rate by passed params
	 *
	 * @param {MonthlyRateInput} params - input params
	 */
	static async calculateMonthyRate(
		input: MonthlyRateInput
	): Promise<{ monthlyRate: number }> {
		const monthlyInterestRate = input.interestRate / 100 / input.interestRate;

		const monthlyRate =
			input.loanAmount *
			((monthlyInterestRate *
				Math.pow(1 + monthlyInterestRate, input.numberOfMonths)) /
				(Math.pow(1 + monthlyInterestRate, input.numberOfMonths) - 1));

		return {
			monthlyRate: +monthlyRate.toFixed(4),
		};
	}
}
