import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

// prisma.server.ts
// the .server is a hint to the compiler that this is a server file
// It tells the compiler to not worry about this module or its imports when bundling for the browser

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
  prisma.$connect();
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
    global.__db.$connect();
  }
  prisma = global.__db;
}

export { prisma };
