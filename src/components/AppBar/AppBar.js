import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu';
import styles from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function AppBar1() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      {!isLoggedIn ? (
        <nav>
          <NavLink
            exact
            to="/register"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Register
          </NavLink>

          <NavLink
            exact
            to="/login"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Login
          </NavLink>
        </nav>
      ) : (
        <>
          <nav>
            <NavLink
              exact
              to="/contacts"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Contacts
            </NavLink>
          </nav>

          <UserMenu />
        </>
      )}
    </header>
  );
}
