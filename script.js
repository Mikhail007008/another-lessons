'use strict';

let lang = prompt('Выберете язык', 'рус / en');

if (lang === 'рус'){
	console.log('Пн Вт Ср Чт Пт Сб Вск');
} else if(lang === 'en'){
	console.log('Mon Tue Wed Thu Fri Sat Sun');
}


switch (lang){
	case 'рус': 
		console.log('Пн Вт Ср Чт Пт Сб Вск');
		break;
	case 'en': 
		console.log('Mon Tue Wed Thu Fri Sat Sun');
		break;
}

let langAnsw = [['рус'], ['en']];
langAnsw[0] = 'рус'; 
let result = langAnsw[0] === lang ? console.log('Пн Вт Ср Чт Пт Сб Вск') : console.log('Mon Tue Wed Thu Fri Sat Sun');

const namePerson = prompt('Введите имя', 'Артем / Максим / другое');
let result1 = namePerson === 'Артем' ? alert('Директор') : 
	namePerson === 'Максим' ? alert('Преподаватель') : 
	alert('студент');