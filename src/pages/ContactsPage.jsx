import { useEffect } from 'react';
import { removeContact } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/constacts-selectors';
// import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);

  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };

  useEffect(() => {
    // dispatch(fetchCurrentUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>PhoneBook</h2>

      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList contacts={contacts} deleteContact={onDeleteContact} />
    </>
  );
};

export default ContactsPage;
