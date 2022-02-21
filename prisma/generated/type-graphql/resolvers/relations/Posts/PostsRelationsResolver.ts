import * as TypeGraphQL from "type-graphql";
import { Posts } from "../../../models/Posts";
import { Users } from "../../../models/Users";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Posts)
export class PostsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() posts: Posts, @TypeGraphQL.Ctx() ctx: any): Promise<Users> {
    return getPrismaFromContext(ctx).posts.findUnique({
      where: {
        id: posts.id,
      },
    }).user({});
  }
}
