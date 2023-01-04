import React, {memo} from 'react';
import {Navigate} from 'react-router-dom';
import Loading from '../components/Loading';
import {MainRoute} from './routes';

export interface BaseGuardProps {
  children?: JSX.Element | null;
  loading?: boolean;
  rule?: boolean;
  to?: string;
}

const DEFAULT_REDIRECT_PATH = MainRoute.Dashboard;

const BaseGuard: React.FC<BaseGuardProps> = ({
  children = null,
  loading,
  rule,
  to = DEFAULT_REDIRECT_PATH,
}) => {
  if (loading) {
    return <Loading />;
  }

  return rule ? children : <Navigate to={to} />;
};

export default memo(BaseGuard);
