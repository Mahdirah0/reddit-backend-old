import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from '.prisma/client';
import dotenv from 'dotenv';
dotenv.config();

import helloResolver from './resolvers/helloResolver';
import UserResolver from './resolvers/userResolver';
import PostResolver from './resolvers/postResolver';

// import { DeleteUsersResolver } from '../prisma/generated/type-graphql';

const startServer = async () => {
  const prisma = new PrismaClient();
  // await prisma.$connect();

  const schema = await buildSchema({
    resolvers: [UserResolver, PostResolver],
    validate: false,
  });

  const server = new ApolloServer({
    schema: schema,
    context: ({ req }) => ({ headers: req.headers, prisma }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  const { port } = await server.listen(4000);
  console.log(`🚀  Server ready at ${port}`);
};

startServer().catch(console.error);
