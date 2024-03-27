// 1. 함수 표현식
function funcA() {
    console.log('funcA');
}

let varA = funcA;
varA();

// 2. 호이스팅 안됨
let varB = function () { // 익명 함수
    console.log('funcB');
}
varB();
// 3. 화살표 함수
let varC = () => {
    console.log('funcC');
}
varC();

let varD = (value) => value + 1;
console.log(varD(11));