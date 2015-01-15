/**
 * Returns an array containing a sequence of numbers. Pretty simple really.
 *
 * @param {number} [start] Optional start number, defaults to 1.
 * @param {number} end Where should we finish?
 * @returns {Array} An array of numbers e.g. [1, 2, 3]
 */
module.exports = function (start, end) {
	if (typeof end !== 'number') {
		end = start;
		start = 1;
	}

	var array = [];
	var i = start;

	if (start < end) {
		for ( ; i <= end; i++) {
			array.push(i);
		}
	} else {
		for ( ; i >= end; i--) {
			array.push(i);
		}
	}

	return array;
};
