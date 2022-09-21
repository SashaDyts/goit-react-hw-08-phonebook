import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
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
