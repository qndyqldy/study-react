import './ContactItem.css';
const ContactItem = ({id, name, contact, deleteContact}) => {
  const onClick = () => {
    deleteContact(id);
  }

  return (
    <section className={"ContactItem"}>
      <div className={"name"}>
        {name}
      </div>
      <div className={"contact"}>
        {contact}
      </div>
      <button onClick={onClick}>Remove</button>
    </section>
  )
}

export default ContactItem;