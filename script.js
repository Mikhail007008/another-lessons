'use strict';

const rus = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вск'];
const en = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


const lang = prompt('Выберете язык', 'рус / en');

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

const result = lang === 'рус' ? console.log(rus) : console.log(en);

const namePerson = prompt('Введите имя', 'Артем / Максим / другое');
let result1 = namePerson === 'Артем' ? alert('Директор') : 
	namePerson === 'Максим' ? alert('Преподаватель') : 
	alert('студент');