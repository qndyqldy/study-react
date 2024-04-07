import './App.css'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import {useState, useEffect, useRef} from "react";
import Even from "./components/Even.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);
  // vue - watch
  // parameter - callback
  // [] - 의존성 배열, dependency array, deps
  // useEffect(() => {
  //   console.log(`count : ${count}`);
  //   console.log(`input : ${input}`);
  // }, [count, input]);

  // 1. 마운트 : 탄생, 인수로 빈배열
  useEffect(() => {
    console.log('mount');
  }, []);

  // 2. 업데이트 : 변화, 리렌더링, 인수 선언 X
  // 마운트시 업데이트 실행 안하기 위해선 reference 객체를 이용
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }

    console.log('update');
  });

  // 3. 언마운트 : 죽음


  const addCount = (num) => {
    setCount(count + num);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }}
        />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller addCount={addCount}/>
      </section>
    </div>
  )
}

export default App