Array.prototype.customFlat = function () {
	const res = [];

	for (const elem of this) {
		if (Array.isArray(elem)) {
			res.push(...elem.customFlat());

			continue;
		} else if (typeof elem === 'object') {
			res.push(...Object.values(elem).customFlat());

			continue;
		}

		res.push(elem);
	}

	return res;
};

if (!module.parent) {
	console.log('Example:');
	console.log([[2], 3, {}, [1, 2]].customFlat()); // [ 2, 3, 1, 2 ]
	console.log([2, 3, [[1, { a: 'text' }], [[2]]], 5].customFlat()); // [ 2, 3, 1, 'text', 2, 5 ]
	console.log(
		[5, { a: 1 }, [1, [3, {}, { c: 'a', d: [2, 2] }], [[6]]]].customFlat()
	); // [ 5, 1, 1, 3, 'a', 2, 2, 6 ]
}
