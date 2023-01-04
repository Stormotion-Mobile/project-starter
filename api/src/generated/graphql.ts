import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type query_root = {
  __typename?: 'query_root';
  /** There are no queries available to the current role. Either there are no sources or remote schemas configured, or the current role doesn't have the required permissions. */
  no_queries_available: Scalars['String'];
};

export type testQueryVariables = Exact<{ [key: string]: never; }>;


export type testQuery = (
  { __typename?: 'query_root' }
  & Pick<query_root, 'no_queries_available'>
);


export const testDocument = gql`
    query test {
  no_queries_available
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    test(variables?: testQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<testQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<testQuery>(testDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'test', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;