// math module
export function add(a, b) {
	return a + b;
}

export function sub(a, b) {
	return a - b;
}

// 외부에서 사용할 수 있도록
// Common JS 모듈
// module.exports = {
// 	add, sub
// }

// ES 모듈
// export {
// 	add, sub
// };

// default
// 해당 모듈의 대표 값
// import 할 때 중괄호 없이 불러와야함
export default function multiply(a, b) {
	return a * b;
}