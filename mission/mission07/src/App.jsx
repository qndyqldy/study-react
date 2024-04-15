import './App.css'
import ContactEditor from "./components/ContactEditor.jsx";
import ContactList from "./components/ContactList.jsx";
import {createContext, useCallback, useMemo, useReducer, useRef} from "react";

const mockData = [
  {
    id: 0,
    name: '임영욱',
    contact: 'qndyqldy@naver.com',
  },
  {
    id: 1,
    name: '홍길동',
    contact: 'gildong@gmail.com',
  },
]

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return [action.data, ...state];
    case 'DELETE':
      return state.filter(contact => contact.id !== action.targetId);
    default:
      return state;
  }
}

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [contactList, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  const addContact = useCallback((contact) => {
    dispatch({
      type: 'ADD',
      data: {
        id: idRef.current++,
        ...contact
      }
    })
  }, []);

  const deleteContact = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId
    })
  }, []);

  const memoizedDispatch = useMemo(() => {
    return {addContact, deleteContact}
  }, []);

  return (
    <div className={"App"}>
      <h1>Contact List</h1>
      <ContactStateContext.Provider value={contactList}>
        <ContactDispatchContext.Provider value={memoizedDispatch}>
          <ContactEditor addContact={addContact}/>
          <ContactList contactList={contactList} deleteContact={deleteContact}/>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  )
}

export default App
