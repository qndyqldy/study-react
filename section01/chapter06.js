// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환
let num = 10;
let str = "20";

const result = num + str; // 1020
console.log(result);

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환
// 문자열 -> 숫자
let str1 = '10';
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = '10개';
let strToNum2 = Number(str2); // 일반 텍스트가 섞여 있으면 NaN
console.log(strToNum2);

let strToNum3 = parseInt(str2); // 숫자가 앞으로 나와있어야 함
console.log(strToNum3);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
