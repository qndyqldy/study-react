const Controller = ({addCount}) => {

  return (
    <div>
      <button onClick={() => {
        addCount(-1);
      }}>-1</button>
      <button onClick={() => {
        addCount(-10);
      }}>-10</button>
      <button onClick={() => {
        addCount(-100);
      }}>-100</button>
      <button onClick={() => {
        addCount(100);
      }}>+100</button>
      <button onClick={() => {
        addCount(10);
      }}>+10</button>
      <button onClick={() => {
        addCount(1);
      }}>+1</button>
    </div>
  )
}

export default Controller;