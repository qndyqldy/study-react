function returnFalse() {
    console.log('false 함수');
    return false;
}

function returnTrue() {
    console.log('true 함수');
    return true;
}

console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name; 
    console.log(name || 'person의 값이 없음');
}
printName();
printName({name: 'wook'});