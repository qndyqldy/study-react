// 1. if 조건문
let num = 5;

if(num >= 10) {
	console.log('num은 10 이상입니다.');
	console.log('조건이 참 입니다.');
} else if(num >= 5) {
	console.log('num은 5 이상입니다.');
} else {
	console.log('조건이 거짓입니다.');
}

// 2. switch 문
// 다수의 조건을 처리할 때 if보다 더 직관적
let animal = 'cat';
switch(animal) {
	case 'cat':
		console.log('냐옹');
		break;
	case 'dog':
		console.log('멍');
		break;
	default:
		console.log('우엉');
		break;
}