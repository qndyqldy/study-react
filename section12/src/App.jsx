import './App.css';
import {createContext, useReducer, useRef} from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import NotFound from "./pages/NotFound.jsx";
import Edit from "./pages/Edit.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용'
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2번 일기 내용'
  }
]
export function reducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map(item => String(item.id) === String(action.data.id) ? action.data : item);
    case 'DELETE':
      return state.filter(diary => diary.id !== action.targetId);
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    });
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    });
  }

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId
    })
  }

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}/>

      <button onClick={() => {
        onCreate(new Date().getTime, 1, '첫번째 일기');
      }} >일기추가 테스트</button>
      <button onClick={() => {
        onUpdate(1, new Date().getTime(), 3, "수정된 일기")
      }}>일기 수정 테스트</button>
      <button onClick={() => {
        onDelete(1);
      }}>일기 삭제 테스트</button>

      {/*Routes 컴포넌트 안에는 Route 컴포넌트만 사용 가능하다*/}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={
            {onCreate, onUpdate, onDelete}
          }>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/new"} element={<New />} />
            <Route path={"/diary/:id"} element={<Diary />} />
            <Route path={"/edit/:id"} element={<Edit />} />
            {/*이외의 경로는 NotFound 렌더링*/}
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
