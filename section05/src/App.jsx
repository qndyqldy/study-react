import Button from './components/Button';
import Header from "./components/Header.jsx";

// Root component
function App() {
  // 먼저 props를 정의 후 spread 연산자를 사용하여 props 전달
  const buttonProps = {
    text: '메일',
    color: 'yellow',
    a: 1,
    b: 2
  };

  return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button {...buttonProps} />
      <Button text={"블로그"}>
        {/*자식컴포넌트에게 html 태그 및 component 전달 가능*/}
        <Header />
        <div>자식요소</div>
      </Button>
    </>
  )
}

export default App
