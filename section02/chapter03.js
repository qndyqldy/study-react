// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
	name: 'wook',
	age: 27,
	hobby: 'computer'
};
let {name: name2, age, hobby, extra = 'hello'} = person;
console.log(name2);
console.log(age);
console.log(hobby);
console.log(extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
	console.log(name);
	console.log(age);
	console.log(hobby);
}

func(person);