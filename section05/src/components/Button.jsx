// 부모 컴포넌트에서 보낸 html 및 component는 children에 담김
const Button = ({text, color, children}) => {
  return (
    <button style={{color: color}}>
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