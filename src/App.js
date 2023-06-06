import React from 'react';
import Login from './pages/Login/index';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/header.js';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyle />
    </>
  );
}

export default App;
