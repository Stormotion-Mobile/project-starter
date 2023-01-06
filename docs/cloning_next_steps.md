# What to do next

Congratulations for cloning this template. Hopefully, it helps you a lot. Let's go through the steps required to make it work inside your app

## Clear out unneeded services

It's all clear here.

- If you have a web app and a server, you probably don't need `app`
- If you have a mobile app and a server, you probably don't need `web`
- If you don't have a server in your app, you probably don't need `hasura`/`api`

## Set up basic envs

Get them from the `Project Starter` folder inside Google Drive

## `shared` next steps

Here we have a code, responsible for managing the localization.

[Follow the shared Readme](../shared/Readme.md)

## `app`

### Setting up a project

Rename to your project names. Assume your project name is `sportplus`

1. Write `npx react-native-rename "sportplus" -p "sportplus" -b "com.sportplus"`
2. Rename `yourgreatappDev-Info.plist` to `sportplusDev-Info.plist`
3. If podfile, change `target 'yourgreatappDev' do` to `target 'sportplusDev' do`
4. Rename in fastfile `yourgreatapp` to `sportplus`
5. Remove `ios/yourgreatapp.xcodeproj`
6. Rename in `.pbxproj`, `.xcscheme` `yourgreatapp` to `sportplus`
7. Rename `yourgreatappDev.xcscheme` `sportplusDev.xcscheme`
8. Change Bundle identifier in `dev` scheme from `com.sportplus` to `com.sportplus.dev`
9. In package.json, change from:

```
    "localize": "yarn workspace @artofcomms/shared localize app 0"
```

To

```
    "localize": "yarn workspace @yourgreatapp/shared localize app 0"
```

10. Install dependencies, pods `yarn && bundle install && cd ios && pod install`
11. Make sure you have no `yourgreatapp` in search
12. Run `ios`/`android` using scripts from `package.json`

### Setup your iTunes App / Google Play app for both Dev/Prod(depending on whether you have access to both)

### Setup Fastlane

[Read the guide](https://wiki.stormotion.io/en/development/fastlane) to understand the whole process. What you need to do after cloning template is a bit simpler(as you don't have to create files yourself):

1. Create the credentials repo(ask Alex to do it)
2. Generate credentials
3. Generate all the required key content key

### Server preparations

Replace basic `fragments`/`queries`/`mutations`/`subscriptions` files with ones you really need in your project

## `hasura`

Start working and add your migrations

## `api`

Start working and add your endpoints

## `web`

Also nothing special from your side. Feel free to just work
