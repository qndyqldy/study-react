console.log(1);

// setTimeout(); 원하는 동작을 특정 시간 뒤에 실행
// timeout 시간 뒤에 callback 함수 실행
setTimeout(() => {
	console.log(2);
}, 3_000);

console.log(3);
