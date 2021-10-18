import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';
import { useSelector } from 'react-redux';

import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName "home-page" */),
);
const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import('pages/ContactsPage.js' /* webpackChunkName: "contacts-page" */),
);

function App() {
  const dispatch = useDispatch();
  const getIsFetchCurrentUser = useSelector(
    authSelectors.getIsFetchCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !getIsFetchCurrentUser && (
      <Container>
        <AppBar />

        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#8c91b3"
              height={50}
              width={50}
              timeout={3000} //3 secs
            />
          }
        >
          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <PublicRoute path="/register" exact restricted>
              <RegisterPage />
            </PublicRoute>

            <PublicRoute path="/login" exact restricted>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/contacts" exact>
              <ContactsPage />
            </PrivateRoute>

            <Redirect to="/login" />
          </Switch>
        </Suspense>
      </Container>
    )
  );
}

export default App;
