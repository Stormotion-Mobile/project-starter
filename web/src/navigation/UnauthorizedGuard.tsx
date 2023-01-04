import React, {memo} from 'react';
import BaseGuard, {BaseGuardProps} from './BaseGuard';
import {MainRoute} from './routes';

interface Props extends BaseGuardProps {}

const UnauthorizedGuard: React.FC<Props> = props => {
  const isAuthorized = false; // change with real auth provider
  const isLoading = false;

  // TODO: Replace path with enum
  return (
    <BaseGuard
      loading={isLoading}
      rule={!isAuthorized}
      to={MainRoute.Root}
      {...props}
    />
  );
};

export default memo(UnauthorizedGuard);
