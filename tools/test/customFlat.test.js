const { expect } = require('chai');
require('../index');

describe('Test customFlat function.', () => {
	const errorMessage = `Elements in result array are different`;

	it(`Case 1. [[2], 3, {}, [1, 2]]`, function (done) {
		const testArr = [[2], 3, {}, [1, 2]];
		const expectedResult = [2, 3, 1, 2];

		const result = testArr.customFlat();

		expect(result).to.eql(expectedResult, errorMessage);

		done();
	});

	it(`Case 2. [2, 3, [[1, { a: 'text' }], [[2]]], 5]`, function (done) {
		const testArr = [2, 3, [[1, { a: 'text' }], [[2]]], 5];
		const expectedResult = [2, 3, 1, 'text', 2, 5];

		const result = testArr.customFlat();

		expect(result).to.eql(expectedResult, errorMessage);

		done();
	});

	it(`Case 3. [5, { a: 1 }, [1, [3, {}, { c: 'a', d: [2, 2] }], [[6]]]]`, function (done) {
		const testArr = [5, { a: 1 }, [1, [3, {}, { c: 'a', d: [2, 2] }], [[6]]]];
		const expectedResult = [5, 1, 1, 3, 'a', 2, 2, 6];

		const result = testArr.customFlat();

		expect(result).to.eql(expectedResult, errorMessage);

		done();
	});
});
