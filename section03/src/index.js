// 외부에 정의된 모듈 사용하기 위해
// Common JS 모듈
// const moduleData = require('./math.js');
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));
//
// const {add, sub} = require('./math.js');
// console.log(add(1, 2));
// console.log(sub(1, 2));

// ES 모듈, 확장자까지 명시해줘야함
import {add, sub} from './math.js'
console.log(add(1, 2));
console.log(sub(1, 2));

// default 불러오기
import mul from './math.js'
console.log(mul(2, 3));