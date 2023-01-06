# Possible next steps for the Template

## Migrating from CRA to Next.js

Next.js works much better and provides us with a much better UX and also DX.

A few concerns here:

- If we enable SSR, we might need a bit better server than a simple 5$ server, probably needs hosting on vercel
- We also need to spend some time for developers to learn it as it's a bit different from React

## Make RN update smoother

Right now, it's impossible to automate the RN version update within a script mostly because we make changes to .xcodeproj, .xcscheme. These are not easilt programmable. `Expo` as some point tried looking at it, but they got rid of this idea

## Add E2E setup to RN

## Add basic DigitalOcean .yml prepared so that it's easier to bootstrap a server
