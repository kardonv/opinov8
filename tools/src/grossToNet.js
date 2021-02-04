/**
 * Calculates Net price based on Gross price and tax
 *
 * @param {Number} grossPrice - price in gross
 * @param {Number} vat - given tax
 */
function convertGrossToNet(grossPrice, vat) {
	if (typeof grossPrice !== 'number' || typeof vat !== 'number') {
		throw new Error(`All parameters must be passed as numbers.`);
	}

	return grossPrice - (grossPrice * vat) / 100;
}

module.exports = {
	convertGrossToNet,
};
