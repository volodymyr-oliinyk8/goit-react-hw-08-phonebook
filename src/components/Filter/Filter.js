import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../../redux/Phonebook/phonebook-actions';
import { selectors } from '../../redux/Phonebook';

import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& label': {
    color: 'seagreen',
  },
  '& input': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'seagreen',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

const Filter = ({ value, onChange }) => (
  <CssTextField
    type="text"
    value={value}
    label="Find contacts"
    onChange={onChange}
  />
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  value: selectors.getContactFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(Actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
