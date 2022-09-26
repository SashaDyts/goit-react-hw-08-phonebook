import React from 'react';
import { FiDelete } from 'react-icons/fi';

import {
  ContactList,
  ContactListItem,
  DeleteContactBtn,
} from './ContactsList.styled';
// import PropTypes from 'prop-types';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ContactList>
      {contacts.map(({ id, number, name }) => {
        return (
          <ContactListItem key={id}>
            {name}: {number}
            <DeleteContactBtn
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
              <FiDelete size={20} />
            </DeleteContactBtn>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };

export default ContactsList;
