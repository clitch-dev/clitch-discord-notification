# Clitch Discord Notification Bot

## About

This is a discord notification bot that monitors incoming messages from a callback server and send discord DMs to the appropriate user.

## Usage

### Dot Env

```env
DISCORD_TOKEN=<discord bot token>
WEBHOOK_ID=<discord channel webhook client id>
WEBHOOK_TOKEN=<discord channel webhook client token>
CALLBACK_SERVER_ID=<monitor server>
```

### Scripts

```bash

# install all the dependencies
yarn

# starts the application with ts-node and nodemon
yarn start

# transpile the project into production-optimized javascript
yarn build
```
