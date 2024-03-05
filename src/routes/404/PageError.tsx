import React from 'react';
import LogoLoad from '../../components/LogoLoad/LogoLoad';

export default function PageError(): JSX.Element {
  return (
    <>
      <main data-testid="page-404">
        <LogoLoad />
        <div>
          <span>Page not found!</span>
        </div>
      </main>
    </>
  );
}
