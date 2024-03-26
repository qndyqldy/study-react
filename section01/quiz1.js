// quiz 1
const x = 15;
const y = 20;
let max = x > y ? x : y;
console.log(max);

// quiz 2
const a = true;
if(a) {
	console.log(typeof a);
}

// quiz 3
let temperature = 10;
if(temperature < 0) {
	console.log('매우 추움');
} else if(temperature < 10) {
	console.log('추움');
} else if(temperature < 20) {
	console.log('적당');
} else {
	console.log('더움')
}
