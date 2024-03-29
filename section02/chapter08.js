// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [1, 2, 3, 4];
let filterArr = arr1.filter(item => item > 2);
console.log(filterArr);
let arr2 = [
    {name: 'wook', age: 32},
    {name: 'woo', age: 24},
    {name: 'ho', age: 34},
]
let filterArr2 = arr2.filter(item => item.age > 30);
console.table(filterArr2);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr3 = [...arr2];
let names = arr3.map((item) => {
    return item.name;
});
console.log(names);

// 3. sort
// 배열을 '사전순'으로 정렬하는 메서드
// 원본 배열을 정렬함
let arr4 = ['z', 'd', 'c'];
arr4.sort();
console.log(arr4);
// 숫자는 숫자를 비교하는 callback 함수 필요
let arr5 = [10, 3, 5];
arr5.sort((num1, num2) => {
    // 오름차순, 반대로하면 내림차순
    if(num1 > num2) {
        // num2가 num1 앞에 와라
        return 1;
    } else if(num1 < num2) {
        // num1이 num2 앞에 와라
        return -1;
    } else {
        return 0;
    }
});
console.log(arr5);

// 4. toSorted
// 원본 배열은 그대로, 정렬된 배열을 반환함
let arr6 = ['d', 'g', 'a']
let sortedArr = arr6.toSorted();
console.log(sortedArr);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr7 = ['hi', 'im', 'wook'];
const joined = arr6.join('boo');
console.log(joined);