import './App.css'
import ContactEditor from "./components/ContactEditor.jsx";
import ContactList from "./components/ContactList.jsx";
import {useReducer, useRef} from "react";

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

function App() {
  const [contactList, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  const addContact = (contact) => {
    dispatch({
      type: 'ADD',
      data: {
        id: idRef.current++,
        ...contact
      }
    })
  }

  const deleteContact = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId
    })
  }

  return (
    <div className={"App"}>
      <h1>Contact List</h1>
      <ContactEditor addContact={addContact}/>
      <ContactList contactList={contactList} deleteContact={deleteContact}/>
    </div>
  )
}

export default App
