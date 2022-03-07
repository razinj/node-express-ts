# node-express-ts

This a sample project that contains Node JS and Express JS with Typescript support

## What's inside

- [express](https://github.com/expressjs/express) as a web framework
- [compression](https://github.com/expressjs/compression) as a middleware used to compress response bodies
- [morgan](https://github.com/expressjs/morgan) as a middleware used to log requests
- [prettier](https://github.com/prettier/prettier) (dev dependency) as a formatter to keep a consistent app format, would be better used when setup as a pre-commit hook

## Guidelines

- **Environment variables:** take advantage of environment variables in the app from the port to the urls used, make the app configurable from one point (TODO, add dotenv)

- **No Javascript files:** avoid using Javascript files in the project for any reason, stick to Typescript and always install typings of any library that will be used

- **Be Async:** try to always go asynchronous, and always use async/await to avoid callbacks

- **Catch errors:** always wrap your service and/or handler in a try/catch block, you can have nested try/catch but a wrapper is a must, the use of an external system to report problems (like Sentry)

- **Keep trace:** always log the code to make it easy for debugging and investigating, that said, logging level is to be decided (TODO, add logging library, Winston or Pino?)

- **Folder structure:** below you will find how the app is structured using the idea of separation of concerns

- ***Automated task runners:** maybe a task needs to be performed everytime we build the app, maybe something like Gulp can be used?*

```shell
src
      ├── app.ts              app configuration
      ├── index.ts            app entry point
      ├── router.ts           routes registration
      ├── /controller         requests handlers
      ├── /model              app models
      ├── /route              routes definitions
      └── /service            business logic
```
