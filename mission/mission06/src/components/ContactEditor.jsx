import './ContactEditor.css';
import {useRef, useState} from "react";

const ContactEditor = ({addContact}) => {
  const [contact, setContact] = useState({
    name: '',
    contact: ''
  });
  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  }
  const nameRef = useRef();
  const contactRef = useRef();
  const onClick = () => {
    if(contact.name === '') {
      alert('이름을 입력해주세요.');
      nameRef.current.focus();
      return;
    }

    if(contact.contact === '') {
      alert('연락처를 입력해주세요.');
      contactRef.current.focus();
      return;
    }

    addContact(contact);

    setContact({
      name: '',
      contact: ''
    })
  }

  return (
    <section className={"ContactEditor"}>
      <h3 className={"title"}>Add Contact</h3>

      <div className={"input_wrapper"}>
        <input
          type={"text"}
          className={"name"}
          name={"name"}
          ref={nameRef}
          value={contact.name}
          onChange={onChange}
          placeholder={"이름..."} />
        <input
          type={"text"}
          className={"contact"}
          name={"contact"}
          ref={contactRef}
          value={contact.contact}
          onChange={onChange}
          placeholder={"연락처(이메일)..."}/>
      </div>
      <button onClick={onClick}>Add</button>
    </section>
  )
}

export default ContactEditor;