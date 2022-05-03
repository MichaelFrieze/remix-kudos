# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

## Prisma Commands

This command is used for initial Prisma setup:

```bash
npx prisma init --datasource-provider mongodb
```

This is used to synchronize the Prisma schema with the database schema for prototyping.
Also, for initial setup, this is the command that should be used after `.env` and `npm install`:

```bash
npx prisma db push
```

This command is used to open prisma studio in the browser:

```bash
npx prisma studio
```

This command generates assets like Prisma Client (Use db push if new collection/model is created in Prisma schema):

```bash
npx prisma generate
```

## ENV example

`.env`

```
# MongoDB URL
DATABASE_URL=""

# This can be anything you want
SESSION_SECRET=""

# AWS S3 details
KUDOS_S3_ACCESS_KEY_ID=""
KUDOS_S3_SECRET_ACCESS_KEY=""
KUDOS_S3_BUCKET_NAME=""
KUDOS_S3_BUCKET_REGION=""
```

## URL to tutorial video on Prisma's YouTube channel

[Build A Fullstack App with Remix, Prisma & MongoDB](https://www.youtube.com/watch?v=4tXGRe5CDDg)
