for(let i = 0; i < 10; i++) {
    console.log('반복!');

    if(i % 2 === 0) {
        continue; // 멈추고 다음 반복 절차로
    }

    console.log(i);

    if(i >= 5) {
        break; // 반복문 멈춤
    }
}
