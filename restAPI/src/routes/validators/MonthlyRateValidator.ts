import { ParamSchema } from 'express-validator';
import { NUMBER_TYPE_REQUIRED } from './constants';

const customNumberValildator = (value: string) => !isNaN(+value);

export const MonthlyRateValidator: {
	[key: string]: ParamSchema;
} = {
	loanAmount: {
		in: 'query',
		trim: true,
		custom: {
			options: customNumberValildator,
			errorMessage: NUMBER_TYPE_REQUIRED,
		},
	},
	numberOfMonths: {
		in: 'query',
		trim: true,
		custom: {
			options: customNumberValildator,
			errorMessage: NUMBER_TYPE_REQUIRED,
		},
	},
	interestRate: {
		in: 'query',
		trim: true,
		custom: {
			options: customNumberValildator,
			errorMessage: NUMBER_TYPE_REQUIRED,
		},
	},
	finalPayment: {
		in: 'query',
		trim: true,
		optional: true,
		custom: {
			options: customNumberValildator,
			errorMessage: NUMBER_TYPE_REQUIRED,
		},
	},
};
