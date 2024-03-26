// 1. Number
let num1 = 27;
let num2 = 0.5;
let num3 = -20;
let mInf = Infinity;
let nan = NaN;

// 2. String
let name = 'wook';
let myLocation = '대전';
let introduce = name + myLocation;
// 템플릿 리터럴 문법
let introduceText = `${name}은 ${myLocation}에 거주합니다.`; // 백틱

// 3. Boolean
let isSwitchOn = true;
let isEmpty = false;

// 4. Null
let empty = null;

// 5. Undefined - 값을 선언만 하고 아무 값도 할당하지 않았을 때
let none;

if(typeof isSwitchOn === 'boolean') {
	console.log(isSwitchOn.toString());
}