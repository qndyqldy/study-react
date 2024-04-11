import './ContactList.css';
import ContactItem from "./ContactItem.jsx";
import {memo, useContext} from "react";
import {ContactDispatchContext, ContactStateContext} from "../App.jsx";

const ContactList = () => {
  const contactList = useContext(ContactStateContext);
  const {deleteContact} = useContext(ContactDispatchContext);

  return (
    <section className={"ContactList"}>
      <h3 className={"title"}>Contact List</h3>

      {
        contactList.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              {...contact}
              deleteContact={deleteContact}/>
          )
        })
      }

    </section>
  )
}

export default memo(ContactList);