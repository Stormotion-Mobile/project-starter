import React, {memo, useMemo} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Auth from '../screens/Auth';
import Main from '../screens/Main';
import AuthorizedGuard from './AuthorizedGuard';
import {MainRoute, createNavigatorPath} from './routes';
import UnauthorizedGuard from './UnauthorizedGuard';

const AUTH = <Auth />;
const MAIN = <Main />;

const RootNavigator: React.FC = () => {
  const loginPath = createNavigatorPath(MainRoute.Auth);
  const mainPath = createNavigatorPath(MainRoute.Dashboard);

  const AuthElement = useMemo(
    () => <UnauthorizedGuard>{AUTH}</UnauthorizedGuard>,
    [],
  );

  const MainElement = useMemo(
    () => <AuthorizedGuard>{MAIN}</AuthorizedGuard>,
    [],
  );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={AuthElement} path={loginPath} />
          <Route element={MainElement} path={mainPath} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default memo(RootNavigator);
