import './ContactList.css';
import ContactItem from "./ContactItem.jsx";

const ContactList = ({contactList, deleteContact}) => {

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

export default ContactList;