import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Router from './routes';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
