import {AuthenticationError} from 'apollo-server-core';
import {ExpressContext} from 'apollo-server-express';
import {Request} from 'express';
import {xApiKey} from './utils/env';

export type ContextType = {
  request: Request;
};

export const createContext = (context: ExpressContext): ContextType => {
  const apiKey = context.req.headers['x-api-key'];

  if (apiKey !== xApiKey) {
    throw new AuthenticationError('Invalid X-API-KEY');
  }

  return {
    request: context.req,
  };
};
