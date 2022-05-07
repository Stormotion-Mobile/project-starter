Glad to see you've cloned this project.

Before getting to working on the project, please read the [Guidelines](https://wiki.stormotion.io/en/development/guidelines)

Let's take a look at what we have here and what we don't. And why

# Global

### apps

We have here `app`(React Native), `web`(Create React App), `hasura`(Hasura), `api`(sidecar for `hasura`)

### eslint

Global code setting for all the projects. Contains some custom properties for react/react-native/api, depending on how we use it.

### tsconfig

Global typescript rules for all the projects. Contain a few custom properties for react/react-native/api, depending on the platform and what we want to use there.

For instance, in `app` we write in the react-native, so we mention it inside the compiler options. Meanwhile in `api` we use `TypeGraphQL`, which heavily relies on the decorators, so we add decorators support inside api

### prettier

Global styling setting for all the projects

### gitlab-ci

Basic jobs for building/uploading the react/react-native. Keep in mind that

# React Native

## Has

### React Navigation

### Dev/Prod setup

### Apollo/Codegen

### Localization

To make it work, setup the google sheet, pass the correct envs to shared/.env. Now your customer can edit it and everyone's happy

### Basic fastlane(even though some of it you should setup yourself)

### Basic theming

### React Native Version

### Expo Packages

Required some extra work to make it work inside monorepo

### example.env so that you understand what to add and where

## Doesn't have

### Sentry

Because the installation process is straightforward, and it's easier for you to go through the process yourself

### React Native Firebase

Because the installation process is straightforward, and it's easier for you to go through the docs, understand what you need, and install it.

## What to do next

1. Change the `yourgreatapp` to any app identifier you'd like(using a command: COMMAND SHOULD BE HERE). Make sure you set up a separate `ios` app inside `itunesconnect` and android app inside `google play console`(for now, you can only create the dev one inside `Stormotion` team)

2. Setup fastlane([full guide to setup from scha could be found here](https://wiki.stormotion.io/en/development/fastlane)):

   2.1. Create repo to store your certificates(or ask Alex to do it ;))
   2.2. Install gems inside `app` folder(`bundle install`)
   2.3. Run [`bundle exec fastlane match init`](https://docs.fastlane.tools/actions/match/)
   2.4 (IOS ONLY) - to make sure our CI works well - set up https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api
   2.5 (ANDORID ONLY) - generate play_console.json
   2.6 Once it's all done, you can fill in the envs inside fastlane_example, and copy-past `envs`, `Appfile`, `Fastfile`

3. Creare you own `app/.env`, on the basis of `app/example.env`
4. Replace basic `fragments`/`queries`/`mutations`/`subscriptions` files with ones you really need in your project
5. Install the dependencies, run the codegen
6. Run the app using `package.json` script commands
