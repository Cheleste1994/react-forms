import React, { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import LogoLoad from '../components/LogoLoad/LogoLoad';
import PageError from './404/PageError';
import ControlledForm from './registration/ControlledForm/ControlledForm';

const Home = lazy(() => import('./HomePage/HomePage'));
const UncontrolledForm = lazy(
  () => import('./registration/UncontrolledForm/UncontrolledForm')
);

const Router = (): React.JSX.Element => (
  <Routes>
    <Route
      path=""
      element={
        <Suspense
          fallback={
            <main>
              <LogoLoad />
            </main>
          }
        >
          <Outlet />
        </Suspense>
      }
    >
      <Route path="/" element={<Home />} />
      <Route path="/registration/uncontrolled" element={<UncontrolledForm />} />
      <Route path="/registration/controlled" element={<ControlledForm />} />
      <Route path="*" element={<PageError />} />
    </Route>
  </Routes>
);

export default Router;
