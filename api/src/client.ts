import {GraphQLClient} from 'graphql-request';
import {getSdk} from './generated/graphql';
import {hasuraAdminSecret, hasuraUrl} from './utils/env';

const client = new GraphQLClient(hasuraUrl, {
  headers: {
    'x-hasura-admin-secret': hasuraAdminSecret,
  },
});

export default getSdk(client);
