const { expect, assert } = require('chai');
const { taxes } = require('../index');

describe('Convert gross to net', () => {
	it('Successful case. Should return price in NET.', function (done) {
		const grossPrice = 1000;
		const VAT = 5; // %

		const expectedNetPrice = 50;

		const netPrice = taxes.convertGrossToNet(grossPrice, VAT);

		expect(expectedNetPrice, netPrice, 'Net price calculated inccorect.');

		done();
	});

	it('Failed case. Call function with not a number value for gross price.', function (done) {
		const grossPrice = '1000'; // failed value
		const VAT = 5; // %

		assert.throws(() => {
			taxes.convertGrossToNet(grossPrice, VAT);
		}, 'All parameters must be passed as numbers.');

		done();
	});

	it('Failed case. Call function with not a number value for VAT.', function (done) {
		const grossPrice = 1000; // failed value
		const VAT = '5'; // %

		assert.throws(() => {
			taxes.convertGrossToNet(grossPrice, VAT);
		}, 'All parameters must be passed as numbers.');

		done();
	});
});
