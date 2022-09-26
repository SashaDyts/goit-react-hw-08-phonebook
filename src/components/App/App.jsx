import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import Layout from '../Layout/Layout';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import { getIsFetching } from 'redux/auth/auth-selectors';

import { Container } from './App.styled';

const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);

const HomePage = lazy(() => import('../../pages/HomePage'));

const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);

function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetching);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetching && (
      <Container>
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />

              <Route element={<PublicRoute redirectTo="/contacts" />}>
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="contacts" element={<ContactsPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Container>
    )
  );
  // return (
  //   <>
  //     <h2>PhoneBook</h2>
  //     <Form />
  //     <h2>Contacts</h2>
  //     <Filter />
  //     <ContactsList />
  //   </>
  // );
}

export default App;
