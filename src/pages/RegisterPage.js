import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import styles from './Page.module.css';

import Button from '@mui/material/Button';
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

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password, name };
    dispatch(authOperations.register(credentials));
    setEmail('');
    setPassword('');
    setName('');
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <CssTextField
          label="Enter your name"
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <CssTextField
          label="Enter your email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <CssTextField
          label="Enter your password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
}
