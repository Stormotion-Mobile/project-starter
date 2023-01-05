## Root

1. `yarn add -D -W @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest babel-eslint@latest eslint@latest eslint-config-prettier@latest eslint-plugin-eslint-comments@latest eslint-plugin-prettier@latest eslint-plugin-sort-keys-fix@latest eslint-plugin-unused-imports@latest prettier@latest typescript@latest`

## App

1. Rename `app` to `old_app`
2. Call `npx react-native init yourgreatapp --template react-native-template-typescript`
3. Rename `yourgreatapp` to `app`. Go to `app`
4. Remove yarn.lock
5. Install dependencies & install Pods
6. Remove `__tests__`
7. Copy `codegen.yml`, `example.env`, `tsconfig.json`, `.eslintrc.js` from `old_app` to `app`(replace if needed). Delete .prettierc.js
8. Copy `fastlane` folder
9. Copy `name`, `scripts` in `package.json` from `old_app` to `app`
10. Copy `metro.config.js` from `old_app` to `app`. run `yarn add -D react-native-monorepo-tools`
11. Add apollo: `yarn add @apollo/client apollo3-cache-persist subscriptions-transport-ws` inside `app` folder. Checkout with Apollo if something changed
12. Add codegen dev: `yarn add -D @graphql-codegen/cli @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo`
13. Add eslint: `yarn add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native`
14. Add i18next: `yarn add i18next react-i18next`
15. Install expo modules: https://docs.expo.dev/bare/installing-expo-modules/
16. Install react-navigation: `yarn add @react-native-async-storage/async-storage @react-navigation/native-stack @react-navigation/native react-native-safe-area-context react-native-screens`
17. Add react-native-version. `yarn add -D react-native-version`
18. Add react-native-config: `yarn add react-native-config`
19. Don't forget to install pods once again ;)
20. Bring back app/android/app/src/dev/res/values
21. app/android/app/build.gradle:

- add `apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"` after first line
- change `enableHermes: false` to `enableHermes: true`
- Add

```
project.ext.envConfigFiles = [
    dev: ".env.dev",
    prod: ".env.prod",
]

apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

after `apply from: "../../node_modules/react-native/react.gradle"`

- add `resValue "string", "build_config_package", "com.yourgreatapp"` in `android.defaultConfig`
- add

```
flavorDimensions "default"
    productFlavors {
        dev {
            dimension "default"
            applicationIdSuffix ".dev"
            versionNameSuffix "-dev"
        }
        prod {
            dimension "default"
        }
    }
```

to `android` object

21. Revise android-related code to make sure no changes are related `com.yourgreatapp` or `react-native-config`. If so, follow the steps once again or contact Nic
22. https://github.com/luggit/react-native-config#availability-in-build-settings-and-infoplist (steps 1-5)
23. Xcode

- yourgreatapp -> Edit Scheme
  ![[./docs/edit_scheme.png]]
- Build -> Pre Actions -> + -> New Run Script Action

```
cp "${PROJECT_DIR}/../.env.prod" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"

```

Choose "Provide build settings from" - your scheme

- Run -> Pre Actions -> + -> New Run Script Action

```
cp "${PROJECT_DIR}/../.env.prod" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"
```

Choose "Provide build settings from" - your scheme

24. Xcode

- Targets -> remove yourgreatappTests

![[./docs.delete_tests.png]]

25. Xcode

- Targets -> yourgreatapp -> right click -> duplicate -> yourgreatappDev
- Find yourgreapp copy-Info.plist, rename to yourgreatappDev-Info.plist. Replace in finder 'yourgreatapp copy-Info.plist' to 'yourgreatappDev-Info.plist'
- XCode -> scheme -> manage schemes -> slow double click on yourgreatapp copy -> yourgreatappDev
- Change yourgreatappDev displayname to contain "Dev"

![[./docs.dev_target.png]]
![[./docs.dev_scheme.png]]

26. Xcode

- yourgreatappDev -> Edit Scheme
- Build -> Pre Actions -> + -> New Run Script Action

```
cp "${PROJECT_DIR}/../.env.dev" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"

```

Choose "Provide build settings from" - your scheme

- Run -> Pre Actions -> + ->

```
cp "${PROJECT_DIR}/../.env.dev" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"
```

Choose "Provide build settings from" - your scheme

27. Copy App.tsx, src folder from `old_app` to `app`
28. Change Podfile to have abstract target on top, remove \*Tests

Before:

```
target 'yourgreatapp' do
 ...

  target 'yourgreatappTests' do
    inherit! :complete
    # Pods for testing
  end
end
```

After:

```
abstract_target 'App` do

  ...

  target 'yourgreatapp' do
  end

  target 'yourgreatappDev' do
  end
env
```

29. Add missing files to gitignore(the one deleted in the bottom of the history)
30. bundle add fastlane
31. Bring back `android` `values`.
32. (optional, maybe shouldn't do it as it might downgrade react native). Run `dep-check`. This is a library which keeps track of all the important dependencies and understand which exact dependencies work well with each other. You need to run it to make sure you have all the stable libraries in place

- `yarn add @rnx-kit/align-deps --dev`
- `yarn rnx-align-deps --init app`
- `yarn rnx-align-deps --write`

33. Troubleshooting - in case you face an issue `Expo Build in XCODE gives error: CompileSwiftSources normal arm64 com.apple.xcode.tools.swift.compiler` - make sure you open Xcode -> Build Phases -> Compile Sources, it doesn't contain any duplicates or dangling references

It should be something like this:

![[./docs/pods_providers.png]]

## Hasura

1. Install hasura dependencies: `cd hasura && yarn`
2. `yarn add -D hasura-cli@latest`. At this point you can go to `hasura/package.json` and see a new version. Suppose it's `2.15.1`

3. Update `hasura/Dockerfile` to use this version:
   For instance, before:

```Dockerfile
FROM hasura/graphql-engine:v2.6.1.cli-migrations-v3
```

After:

```Dockerfile
FROM hasura/graphql-engine:v2.15.1.cli-migrations-v3
```

4. Update `./docker-compose-local.yml`

For instance, before:

```yaml
graphql-engine:
  image: hasura/graphql-engine:v2.6.1
```

After:

```yaml
graphql-engine:
  image: hasura/graphql-engine:v2.15.1
```

5. Make sure it's working correctly by running `yarn console`(don't forget to setup docker-compose-local on root)

## API

1. Install all dev dependencies: `yarn add -D @graphql-codegen/cli@latest @graphql-codegen/typescript@latest @graphql-codegen/typescript-graphql-request@latest @graphql-codegen/typescript-operations@latest @types/node@latest ts-node@latest`

2. Install all dependencies: `yarn add @humanwhocodes/env@latest apollo-server-core@latest apollo-server-express@latest class-validator@latest dotenv@latest express@latest graphql@latest graphql-scalars@latest i18next@latest reflect-metadata@latest type-graphql@latest`

3. Run the server: `yarn dev`, make sure api is accessible from `hasura`

## Web

1. Rename `web` to `old_web`

2. Run `npx create-react-app web --template typescript`

3. Move `src` from `old_web` to `web` - Before doing it make sure you don't overwrite anything

4. Copy scripts, name from `old_web`'s `package.json` to `web`

5. Add missing dependencies `yarn add dotenv i18next-browser-languagedetector react-router-dom @apollo/client apollo3-cache-persist react-i18next`

6. Add missing dev dependencies: `yarn add -D eslint-plugin-react@latest eslint-plugin-react-hooks@latest @graphql-codegen/cli@latest @graphql-codegen/typescript@latest @graphql-codegen/typescript-operations@latest @graphql-codegen/typescript-react-apollo@latest`

7. Adjust gitignore(add `generated` there)

8. Move `tsconfig`, `.eslintrc.js`, `codegen.yml`, `Dockerfile`, `example.env` from `old_web` to `web`

9. (testing only) `yarn localize`

10. Make sure it works(`yarn start`)

# Global

Glad to see you've cloned this project.

Before getting to working on the project, please read the [Guidelines](https://wiki.stormotion.io/en/development/guidelines)

Let's take a look at what we have here and what we don't. And why

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

### Sync Locales

To make it work, setup the google sheet, pass the correct envs to shared/.env. Now your customer can edit it and everyone's happy

NB! It requires that you have two variables in your .env file inside app directory:
SHEET_ID - the id from the link to the spreadsheet
GCP_API_KEY - the API key to GCP

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
