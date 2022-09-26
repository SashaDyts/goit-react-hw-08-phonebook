import { useEffect } from 'react';
import { removeContact } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/constacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

import {
  Container,
  PhoneBookContainer,
  ContactsContainer,
} from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);

  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhoneBookContainer>
        <h2>Phonebook</h2>
        <Form />
      </PhoneBookContainer>

      <ContactsContainer>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList contacts={contacts} deleteContact={onDeleteContact} />
      </ContactsContainer>
    </Container>
  );
};

export default ContactsPage;
