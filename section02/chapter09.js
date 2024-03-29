// 1. Date 객체 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date(2023, 9, 30, 1, 30);
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 '1970.01.01 00시 00분 00초'로 부터 몇 ms가 지났지를 의미하는 숫자값
// 협정세계시 UTC - 시간이 시작되는 지점
let ts1 = date1.getTime();
console.log(ts1);
let date3 = new Date(ts1);
console.log(date3.getTime());

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
console.log(year, month, date, hour, minute, second);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(5);
date1.setDate(21);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleTimeString());