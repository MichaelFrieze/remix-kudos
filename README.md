# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

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

This is used to synchronize the Prisma schema with the database schema for prototyping:

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
