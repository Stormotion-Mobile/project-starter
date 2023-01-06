# General overview

Let's take a look what our template has in place

## apps

We have here `app`(React Native), `web`(Create React App), `hasura`(Hasura), `api`(sidecar for `hasura`)

## eslint

Global code setting for all the projects. Contains some custom properties for react/react-native/api, depending on how we use it.

## tsconfig

Global typescript rules for all the projects. Contain a few custom properties for react/react-native/api, depending on the platform and what we want to use there.

For instance, in `app` we write in the react-native, so we mention it inside the compiler options. Meanwhile in `api` we use `TypeGraphQL`, which heavily relies on the decorators, so we add decorators support inside api

## prettier

Global styling setting for all the projects

## gitlab-ci

Basic jobs for building/uploading the react/react-native. Keep in mind that

# Apps

Let's take a closer look at the apps

## `app`

React Native app

### What it has

#### React Navigation

#### Dev/Prod setup

#### Apollo/Codegen

#### Localization

To add a new language, go to App.tsx and import the json file with the i18n-format translations.
Add the file to resourses:

```
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: Localization.locale,
  resources: {
    ...,
    <newLang>
  }
})
```

#### Sync Locales

To make it work, setup the google sheet, pass the correct envs to shared/.env. Now your customer can edit it and everyone's happy

NB! It requires that you have two variables in your .env file inside app directory:
SHEET_ID - the id from the link to the spreadsheet
GCP_API_KEY - the API key to GCP

#### Fastlane

#### Basic theming

#### React Native Version

#### Expo Packages

Required some extra work to make it work inside monorepo

#### example.env so that you understand what to add and where

### What is doesn't have

#### Sentry

Because the installation process is straightforward, and it's easier for you to go through the process yourself

#### React Native Firebase

Because the installation process is straightforward, and it's easier for you to go through the docs, understand what you need, and install it.

## Hasura

Basic `hasura` setup. Has some basic migration in place. Also has connected external `api`

## Api

Basic `node.js` api. Has `typegraphql` in place. Is connected to hasura. Also has i18n in place

## Web

Basic `create-react-app`

### What it has

#### React Router DOM

#### Apollo/Codegen

#### Localization

To add a new language, go to App.tsx and import the json file with the i18n-format translations.
Add the file to resourses:

```
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: Localization.locale,
  resources: {
    ...,
    <newLang>
  }
})
```

#### Sync Locales

To make it work, setup the google sheet, pass the correct envs to shared/.env. Now your customer can edit it and everyone's happy

NB! It requires that you have two variables in your .env file inside app directory:
SHEET_ID - the id from the link to the spreadsheet
GCP_API_KEY - the API key to GCP

#### Basic theming

Required some extra work to make it work inside monorepo

#### example.env so that you understand what to add and where

### What is doesn't have

#### Sentry

Because the installation process is straightforward, and it's easier for you to go through the process yourself
