'use strict';

let num = 266219;

let result = ('' + num).split('').reduce(function(result, val) {
	return result * val
});

result**=3;

console.log(result.toString().slice(0,2));