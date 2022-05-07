import {Env} from '@humanwhocodes/env';
import dotenv from 'dotenv';

dotenv.config();

const env = new Env();

export function validate() {
  env.require('HASURA_ADMIN_SECRET');
  env.require('HASURA_URL');
  env.require('X_API_KEY');
}

export const hasuraAdminSecret = env.get('HASURA_ADMIN_SECRET')!;
export const hasuraUrl = env.get('HASURA_URL')!;
export const xApiKey = env.get('X_API_KEY')!;
export const port = env.get('PORT', '4000');
