// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7); // 새롭운 배열의 크기 반환

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2= [1, 2, 3];
const poppedItem = arr2.pop();

console.log(arr2);
console.log(poppedItem);


// shift, unshift는 속도가 느림 - 인덱스의 이동으로 인해
// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(arr3);
console.log(shiftedItem);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(arr4);
console.log(newLength2);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 원본값은 실제로 잘리지 않음
let arr5 = [1, 2, 3, 4, 5];
let newArr5 = arr5.slice(2, 5); // 시작 index, 끝 index + 1, 끝까지할거면 두번째 인수 필요 X
let newNewArr5 = arr5.slice(2); // 시작 index, 끝 index + 1, 끝까지할거면 두번째 인수 필요 X
let newNewNewArr5 = arr5.slice(-3); // 음수면 뒤에서 부터
console.log(arr5);
console.log(newArr5);
console.log(newNewArr5);
console.log(newNewNewArr5);

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);