import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import {ApolloServer} from 'apollo-server-express';
import express from 'express';
import http from 'http';
import i18next from 'i18next';
import path from 'path';
import 'reflect-metadata';
import {buildSchema} from 'type-graphql';
import {createContext} from './context';
import * as handlers from './handlers';
import en from './strings/en.json';
import {port, validate} from './utils/env';

validate();

i18next.init({
  lng: 'en',
  resources: {
    en,
  },
});

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [path.join(__dirname, '/**/*.resolver.{ts,js}')],
  });

  const app = express();

  app.use(express.json());

  app.use(Object.values(handlers));

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    context: createContext,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
      ApolloServerPluginDrainHttpServer({httpServer}),
    ],
    schema,
  });

  await server.start();
  server.applyMiddleware({app, path: '/'});

  await new Promise<void>(resolve => httpServer.listen({port}, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
  );
}

bootstrap();
