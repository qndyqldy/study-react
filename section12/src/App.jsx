import './App.css';
import {createContext, useEffect, useMemo, useReducer, useRef, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import NotFound from "./pages/NotFound.jsx";
import Edit from "./pages/Edit.jsx";

export function reducer(state, action) {
  let nextState;

  switch(action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      nextState = [action.data, ...state];
      break;
    case 'UPDATE':
      nextState = state.map(item => String(item.id) === String(action.data.id) ? action.data : item);
      break;
    case 'DELETE':
      nextState = state.filter(diary => String(diary.id) !== String(action.targetId));
      break;
    default:
      nextState = state;
      break;
  }

  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

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

  const memoizedDispatch = useMemo(() => {
    return {
      onCreate, onUpdate, onDelete
    }
  }, [])

  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if(!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);

    if(!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach(item => {
      if(Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: 'INIT',
      data: parsedData
    })

    setIsLoading(false);
  }, []);

  if(isLoading) {
    return <div>데이터 로딩 중입니다...</div>
  }

  return (
    <>
      {/*Routes 컴포넌트 안에는 Route 컴포넌트만 사용 가능하다*/}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={memoizedDispatch}>
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
