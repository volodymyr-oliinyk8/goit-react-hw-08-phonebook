import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { useEffect } from 'react';
import { operations, selectors } from 'redux/Phonebook';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactsList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);
  return (
    <List
      sx={{
        width: '60%',
        maxWidth: 360,
        margin: '10px auto 0 auto',
        color: '#0a988f',
      }}
    >
      {contacts.map(({ id, name, number }) => (
        <ListItem
          name={name}
          key={id}
          disableGutters
          secondaryAction={
            <IconButton
              aria-label="delete"
              color="primary"
              onClick={() => onDelete(id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`${name}: ${number}`} />
        </ListItem>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
