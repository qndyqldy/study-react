// 1. 변수 선언, 초기화
let age; // 선언만 하면 undefined
console.log(age);

age = 30;
console.log(age);

// 2. 상수 변하지 않는 값, 초기화 반드시 필요
const name = 'wook';

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
// 3-2. 숫자로 시작할 수 없다.
// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드 - 친절하고 의미있는 이름으로
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
console.log(totalSalesCount);
