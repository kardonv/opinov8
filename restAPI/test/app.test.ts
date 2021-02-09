import { expect } from 'chai';
import * as supertest from 'supertest';
import { API_VERSION } from '../config';
import { app } from '../src/app';

describe('Loan Controller', () => {
	const server = supertest(app);
	const baseUrl = `${API_VERSION}`;

	it('Calculate monthly rate.', (done) => {
		const loanAmount = 10000;
		const interestRate = 10;
		const numberOfMonth = 12;

		const url =
			`${baseUrl}/loan/monthly-rate?loanAmount=` +
			`${loanAmount}&numberOfMonths=${numberOfMonth}` +
			`&interestRate=${interestRate}`;
		server
			.get(url)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, { body }) => {
				if (err) {
					return done(err);
				}

				expect(body.monthlyRate).to.be.equal(1055.8208);

				done();
			});
	});
});
