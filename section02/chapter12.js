// resolve -> success 상태, 인수에 결과값
// reject -> fail 상태, 인수에 결과값(실패이유)
function add10(num) {
	const promise = new Promise((resolve, reject) => {
		// 비동기 작업 실행하는 함수
		// executor
		setTimeout(() => {
			if(typeof num === 'number') {
				resolve(num + 10);
			} else {
				reject('num이 숫자가 아닙니다.');
			}
		}, 2_000);
	});

	return promise;
}

// promise 결과값 이용
// then 메서드 이용
// 결과 값은 promise 객체를 반환함
// reject 일 경우
// catch 메서드 이용
// promise chaining
const p = add10(0);
p.then((result) => {
	console.log(result);
	return add10(result);
}).then(result => {
	console.log(result);
}).catch(error => {
	console.log(error);
})