// 1. 상수 객체
// 변수 자체값은 변경 못하지만, 프로퍼티 값은 변경 가능
const animal = {
    type: 'cat',
    name: '절구',
    color: 'black & white'
};

// animal = {a: 1}; 오류
animal.age = 2;
animal.name = '임절구';
delete animal.color;
console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티
// 객체의 동작을 정의한다
const person = {
    name: '영욱',
    sayHi: () => {
        console.log('안녕');
    },
    sayBye() {
        console.log('잘가');
    }
}
person.sayHi();
person.sayBye();