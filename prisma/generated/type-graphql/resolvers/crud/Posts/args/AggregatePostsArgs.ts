import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsOrderByWithRelationInput } from "../../../inputs/PostsOrderByWithRelationInput";
import { PostsWhereInput } from "../../../inputs/PostsWhereInput";
import { PostsWhereUniqueInput } from "../../../inputs/PostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePostsArgs {
  @TypeGraphQL.Field(_type => PostsWhereInput, {
    nullable: true
  })
  where?: PostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
