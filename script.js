'use strict';

let hard = '  55555555555555555555555555555555aaaaafdfdfdfdfdfaa   ';

let newFunc = function(arg){
	while (typeof arg !== 'string') {
		alert('Введите значение String');
		break;
	}
	arg = arg.trim();
	console.log(arg.substring(0,30) + '...');
	};

newFunc(hard);
