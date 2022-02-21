import * as TypeGraphQL from "type-graphql";
import { Posts } from "../../../models/Posts";
import { Users } from "../../../models/Users";
import { UsersPostsArgs } from "./args/UsersPostsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class UsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Posts], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersPostsArgs): Promise<Posts[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).posts(args);
  }
}
