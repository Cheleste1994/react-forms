import React from 'react';
import Header from '../../components/Header/Header';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <main data-testid="page-home">Home Page</main>
    </>
  );
}
