import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePostsArgs } from "./args/AggregatePostsArgs";
import { Posts } from "../../../models/Posts";
import { AggregatePosts } from "../../outputs/AggregatePosts";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Posts)
export class AggregatePostsResolver {
  @TypeGraphQL.Query(_returns => AggregatePosts, {
    nullable: false
  })
  async aggregatePosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostsArgs): Promise<AggregatePosts> {
    return getPrismaFromContext(ctx).posts.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
