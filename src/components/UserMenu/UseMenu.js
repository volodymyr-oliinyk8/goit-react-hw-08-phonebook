import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import Button from '@mui/material/Button';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import styles from './UseMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.div}>
      <AccountBoxIcon sx={{ fontSize: 24 }} />
      <p>Welcome, {name}</p>
      <Button
        type="button"
        variant="contained"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
