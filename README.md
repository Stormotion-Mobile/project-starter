# Global

Glad to see you've cloned this project.

Before getting to working on the project, please read the [Guidelines](https://wiki.stormotion.io/en/development/guidelines)

## [How to update](/docs/update.md)

## [Overview](/docs/overview.md)

## [Template Next Steps](/docs/template_next_steps.md)

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
