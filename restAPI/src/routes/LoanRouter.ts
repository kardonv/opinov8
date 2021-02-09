import { Request, Response, Router } from 'express';
import { checkSchema } from 'express-validator';
import { LoanController } from '../controllers/LoanController';
import { checkErrors, MonthlyRateValidator } from './validators';
const router = Router();

router.get(
	'/loan/monthly-rate',
	checkSchema(MonthlyRateValidator),
	checkErrors,
	async (req: Request, res: Response) => {
		let {
			query: {
				loanAmount,
				numberOfMonths,
				interestRate,
				finalPayment = undefined,
			},
		} = req;

		const result = await LoanController.calculateMonthyRate({
			loanAmount: +(loanAmount || 0),
			interestRate: +(numberOfMonths || 0),
			numberOfMonths: +(interestRate || 0),
			finalPayment: +(finalPayment || 0),
		});

		return res.status(200).json(result);
	}
);

export { router as loanRouter };
