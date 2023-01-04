import React, {memo} from 'react';
import BaseGuard, {BaseGuardProps} from './BaseGuard';
import {MainRoute} from './routes';

interface Props extends BaseGuardProps {}

const AuthorizedGuard: React.FC<Props> = props => {
  const isAuthorized = false; // change with real auth provider
  const isLoading = false;

  return (
    <BaseGuard
      loading={isLoading}
      rule={isAuthorized}
      to={MainRoute.Auth}
      {...props}
    />
  );
};

export default memo(AuthorizedGuard);
