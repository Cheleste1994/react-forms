import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <main data-testid="page-home">
        <Outlet />
        Home Page
      </main>
    </>
  );
}
