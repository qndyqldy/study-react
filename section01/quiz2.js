// quiz 1
// 모든 약수 찾기
// 변수 num의 모든 약수를 다 찾아서 출력하세요
let num = 100;
for(let i = 0; i <= 100; i++) {
    if(num % i === 0) {
        console.log(i);
    }
}

// quiz2
// 소수 판별기 (에라토스테네스의 체)
function isPrimeNumber(num) {
    let isPrime = true;
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// quiz3
// 계산기 만들기
function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function calculate(num1, num2, operation) {
    console.log(operation(num1, num2));
}

calculate(5, 3, add);
calculate(5, 3, subtract);