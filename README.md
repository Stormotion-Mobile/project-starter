## App

1. Rename `app` to `app2`
2. Call `npx react-native init yourgreatapp --template react-native-template-typescript`
3. Rename `yourgreatapp` to `app`
4. Remove yarn.lock
5. Install dependencies & install Pods
6. Remove `__tests__`
7. Copy `codegen.yml`, `example.env`, `tsconfig.json`, `.eslintrc.js` from `app2` to `app`(replace if needed). Delete .prettierc.js
8. Copy `fastlane` folder
9. Copy `name`, `scripts` in `package.json` from `app2` to `app`
10. (monorepo only) Copy `metro.config.js` from `app2` to `app`. run `yarn add -D react-native-monorepo-tools`
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
- Build -> Pre Actions -> + ->

```
cp "${PROJECT_DIR}/../.env.prod" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"

```

- Run -> Pre Actions -> + ->

```
cp "${PROJECT_DIR}/../.env.prod" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"
```

24. Xcode

- Targets -> remove yourgreatappTests

25. Xcode

- Targets -> yourgreatapp -> right click -> duplicate -> yourgreatappDev
- Find yourgreapp copy-Info.plist, rename to yourgreatappDev-Info.plist. Replace in finder 'yourgreatapp copy-Info.plist' to 'yourgreatappDev-Info.plist'
- XCode -> scheme -> manage schemes -> slow double click on yourgreatapp copy -> yourgreatappDev

26. Xcode

- yourgreatapp -> Edit Scheme
- Build -> Pre Actions -> + ->

```
cp "${PROJECT_DIR}/../.env.dev" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"

```

- Run -> Pre Actions -> + ->

```
cp "${PROJECT_DIR}/../.env.dev" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"
```

27. Copy App.tsx, src folder from `app2` to `app`
28. Change Podfile to have abstract target on top, remove \*Tests
29. Add missing files to gitignore(the one deleted in the bottom of the history)
30. bundle add fastlane

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
