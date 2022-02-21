import { Context } from '../context';
import { Resolver, Query, Arg, Ctx, Mutation, Root } from 'type-graphql';
import { Posts } from '../../prisma/generated/type-graphql';
import jwt from 'jsonwebtoken';
import { ApolloError } from 'apollo-server-core';

@Resolver()
export default class PostResolver {
  @Query(() => [Posts])
  async posts(@Ctx() { prisma }: Context): Promise<Posts[] | null> {
    return await prisma.posts.findMany();
  }

  @Query(() => Posts, { nullable: true })
  async post(
    @Arg('id') id: string,
    @Ctx() { prisma }: Context
  ): Promise<Posts | null> {
    return await prisma.posts.findFirst({ where: { id: id } });
  }

  @Mutation(() => Posts)
  async createPost(
    @Arg('id') id: string,
    @Arg('title') title: string,
    @Arg('body') body: string,
    @Ctx() { prisma }: Context
  ): Promise<Posts | null> {
    const post = await prisma.posts.create({
      data: {
        title,
        body,
        userId: id,
      },
    });

    return post;
  }

  @Mutation(() => Posts)
  async updatePost(
    @Arg('id') id: string,
    @Arg('title') title: string,
    @Arg('body') body: string,
    @Ctx() { prisma }: Context
  ): Promise<Posts | null> {
    return await prisma.posts.update({
      where: {
        id,
      },
      data: {
        title,
        body,
      },
    });
  }

  @Mutation(() => Posts)
  async deletePost(
    @Arg('id') id: string,
    @Ctx() { prisma }: Context
  ): Promise<Posts | null> {
    return await prisma.posts.delete({
      where: {
        id,
      },
    });
  }

  @Query(() => [Posts])
  async findAll(@Ctx() { prisma, headers }: Context): Promise<Posts[] | null> {
    console.log(headers.headers.authorization);
    const author = headers.headers.authorization as string;
    const isValidToken = jwt.verify(author, 'secret-key');

    if (isValidToken) {
      return await prisma.posts.findMany();
    }

    throw new ApolloError('anothorized');
  }
}
