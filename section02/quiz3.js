// 1. 책 정보 확인하기
function checkProperty(book) {
    const publishedYear = book && book.publishedYear;
    const message = publishedYear ? `출판년도는 ${publishedYear}입니다` : '출판년도 정보가 없습니다.';
    console.log(message);
}

function checkProperty2(book) {
    if('publishedYear' in book) {
        console.log(`출판년도는 ${book.publishedYear}입니다`);
    } else {
        console.log('출판년도 정보가 없습니다.');
    }
}
const book = {
    title: '한 입 크기로 잘라먹는 리액트',
    author: '이정환',
    publishedYear: 2024
}
const book2 = {
    title: '한 입 크기로 잘라먹는 리액트',
    author: '이정환'
}

checkProperty(book);
checkProperty(book2);
checkProperty2(null);
checkProperty2(book2);
