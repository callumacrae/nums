'use strict';

var test = require('tape');
var nums = require('./');

test('nums', function (t) {
	t.plan(7);

	t.deepEqual(nums(5), [1, 2, 3, 4, 5]);
	t.deepEqual(nums(3, 5), [3, 4, 5]);
	t.deepEqual(nums(-2, 2), [-2, -1, 0, 1, 2]);
	t.deepEqual(nums(5, 3), [5, 4, 3]);
	t.deepEqual(nums(-3), [1, 0, -1, -2, -3]);
	t.deepEqual(nums(-3, -5), [-3, -4, -5]);
	t.deepEqual(nums(-5, -3), [-5, -4, -3]);
});
