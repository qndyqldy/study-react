// 부모 컴포넌트에서 보낸 html 및 component는 children에 담김
const Button = ({text, color, children}) => {
  // 이벤트 객체 e
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  }

  return (
    <button
      onClick={onClickButton} // 이벤트 핸들러
      // onMouseEnter={onClickButton} // 이벤트 핸들러
      style={{color: color}}>
      {text} - {color?.toUpperCase()}
      {children}
    </button>
  );
}
// default props 설정
Button.defaultProps = {
  color: 'black'
}
export default Button;