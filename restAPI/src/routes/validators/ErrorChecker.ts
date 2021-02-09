import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

/**
 * Verifies errors that could be appeared during validation
 *
 * @param {Request} req - express request object
 * @param {Response} res - express response object
 * @param {NextFunction} next - next function
 */
export function checkErrors(req: Request, res: Response, next: NextFunction) {
	const validatedResult = validationResult(req);

	if (!validatedResult.isEmpty()) {
		return res.status(400).json(validatedResult.mapped());
	}

	return next();
}
