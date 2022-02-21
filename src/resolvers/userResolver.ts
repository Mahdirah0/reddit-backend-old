import { Context } from '../context';
import { Resolver, Query, Arg, Ctx, Mutation } from 'type-graphql';
import { Users } from '../../prisma/generated/type-graphql';
import {
  UserInputType,
  LoginInputType,
  UpdateInputNameType,
} from '../inputTypes/userInputTypes';
import bcrypt from 'bcrypt';
import ResponseMessage from '../objectTypes/ResponseMessage';
import { validateUser } from '../validation/user.validate';
import jwt from 'jsonwebtoken';

@Resolver()
export default class UserResolver {
  @Query(() => [Users], { nullable: true })
  async users(@Ctx() { prisma }: Context) {
    return await prisma.users.findMany();
  }

  @Query(() => [Users], { nullable: true })
  async test(@Ctx() { prisma, headers }: Context) {
    console.log(headers);
    return await prisma.users.findMany();
  }

  @Query(() => Users, { nullable: true })
  async user(@Arg('name') name: string, @Ctx() { prisma }: Context) {
    return await prisma.users.findFirst({ where: { name: name } });
  }

  @Mutation(() => ResponseMessage)
  async createUser(
    @Arg('input') inputs: UserInputType,
    @Ctx() { prisma }: Context
  ) {
    const value = await validateUser.validateAsync({
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    });

    console.log(value);

    const foundEmail = await prisma.users.findFirst({
      where: { email: inputs.email },
    });

    if (foundEmail != null) {
      return {
        error: [
          {
            field: 'password',
            message: 'Password do not match',
          },
        ],
      };
    }

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(inputs.password, saltRounds);

      const user = await prisma.users.create({
        data: {
          name: inputs.name,
          email: inputs.email,
          password: hashedPassword,
        },
      });
      return { user, message: 'Created Account' };
    } catch (err) {
      return {
        error: [
          {
            field: err,
            message: 'Unexpected Error',
          },
        ],
      };
    }
  }

  @Mutation(() => Users)
  async updateUserName(
    @Arg('input') input: UpdateInputNameType,
    @Ctx() { prisma }: Context
  ) {
    return await prisma.users.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name,
      },
    });
  }

  @Mutation(() => Users)
  async deleteUser(@Arg('id') id: string, @Ctx() { prisma }: Context) {
    return await prisma.users.delete({
      where: {
        id,
      },
    });
  }

  @Mutation(() => ResponseMessage)
  async login(@Arg('input') input: LoginInputType, @Ctx() { prisma }: Context) {
    console.log('0');
    const user = await prisma.users.findFirst({
      where: { email: input.email },
    });

    console.log('1');

    if (user) {
      const match = await bcrypt.compare(input.password, user.password);
      if (match) {
        const token = jwt.sign(
          { username: user.name, email: user.email, id: user.id },
          'secret-key'
        );
        console.log(token);

        return {
          user,
          message: 'Successful Login',
          token,
        };
      } else {
        console.log('2');

        return {
          error: [
            {
              field: 'password',
              message: 'Password do not match',
            },
          ],
        };
      }
    } else {
      console.log('3');
      return {
        errors: [
          {
            field: 'email',
            message: "Couldn't find email",
          },
        ],
      };
    }
  }
}
