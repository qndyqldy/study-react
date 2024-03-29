// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function(item, index, arr) {
    // console.log(index, item * 2);
});
let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
});
console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(4);
console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 같은 값이 있는 경우 가장 처음 인덱스를 반환
// 값이 없으면 -1 반환
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2);
console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는(특정 조건)
// 객체의 특정 값 찾을 때 유용
// 결과는 indexOf 동일
let objectArr = [
    {name: 'wook'},
    {name: 'yim'}
]
let findedIndex = objectArr.findIndex(item => item.name === 'yim');
console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서, 콜백함수를 만족하는 요소를 찾고, 그대로 반환
let arr5 = [
    {name: 'wook'},
    {name: 'yim'}
];
let findObject = arr5.find(item => item.name === 'wook');
console.log(findObject);

