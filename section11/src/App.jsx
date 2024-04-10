import './App.css'
import Header from './components/Header.jsx';
import Editor from './components/Editor.jsx';
import List from './components/List.jsx';
import {useRef, useMemo, useReducer, useCallback, createContext} from 'react';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: '밥먹기',
    date: new Date().getTime()
  }
];

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map(item => item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
    case 'DELETE':
      return state.filter(item => item.id !== action.targetId);
    default:
      return state;
  }
}

// 보통 컴포넌트 외부에 선언
// 리렌더링 될 때마다 실행되기 때문에
// Provider - 공급할 데이터 설정 또는 공급받을 컴포넌트 설정
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime()
      }
    })
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return {onCreate, onUpdate, onDelete}
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            <Editor />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  )
}

export default App