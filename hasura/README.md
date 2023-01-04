# How to start hasura console (step-by-step)

## Prerequisites

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Run Hasura GraphQL engine

The following command will run Hasura GraphQL engine along with a Postgres database to store its metadata.

```
yarn docker-up
```

Check if the containers are running:

```
$ docker ps

CONTAINER ID IMAGE                 ... CREATED STATUS PORTS          ...
097f58433a2b hasura/graphql-engine ... 1m ago  Up 1m  8080->8080/tcp ...
b0b1aac0508d postgres              ... 1m ago  Up 1m  5432/tcp       ...
```

> Learn more: [Auto-apply migrations/metadata when the server starts](https://hasura.io/docs/latest/graphql/core/migrations/advanced/auto-apply-migrations.html)

## Apply Hasura metadata

At this point, the medata will be inconsistent, since migrations have not been applied yet.

```
yarn metadata-apply
```

## Apply database migrations

```
yarn migrate-apply
```

## Reload metadata

Hasura will check again and metadata should now be consistent with database information

```
yarn metadata-reload
```

## Use the console from the CLI

```
yarn console
```

> Useful links:
>
> - [Set up Hasura GraphQL engine using Docker Compose](https://hasura.io/docs/latest/graphql/core/getting-started/docker-simple.html#docker-simple)
> - [Migrations & Metadata (CI/CD)](https://hasura.io/docs/latest/graphql/core/migrations/index.html)
> - [Using AWS Cognito for authentication](https://hasura.io/docs/latest/graphql/core/guides/integrations/aws-cognito.html)
