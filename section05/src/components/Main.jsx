import './Main.css'; // css는 경로만 불러와도 됨
// 컴포넌트 함수의 이름은 대문자로 시작해야 함
const Main = () => {
  const user = {
    name: 'wook',
    isLogin: false,
  }
  
  if(user.isLogin) {
    // 직접 style code 작성
    return <div style={{
      backgroundColor: 'red',
      borderBottom: '5px solid blue'
    }}>로그아웃</div>
  } else {
    return <div className="login">로그인</div>
  }

  // return <>
  //   {user.isLogin ? (
  //     <div>로그아웃</div>
  //   ) : (
  //     <div>로그인</div>
  //   )}
  // </>
}

export default Main;