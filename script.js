'use strict';

const arr = ['24', '361', '45', '8756', '67924', '15466'];

arr.forEach((element) => {
	if (element.startsWith('2')) {
		console.log(element);
	}
	else if (element.startsWith('4')) {
		console.log(element);
	}
	return element;
});


const func = function(a) {
	if (a === 0 || a === 1) {
		return false;
		}

	for (let i = 2; i < a; i++) {
		if (a % i === 0) {
			return false;
		}
	}
	return true;
};

const test = function(min, max) {
	for (let i = min; i < max; i++) {
		if (func(i)) {
			console.log(i + ' Делитель этого числа: 1 и ' + i);
		}
	}
};

test(1,100);