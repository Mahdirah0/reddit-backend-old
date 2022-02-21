import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsOrderByWithAggregationInput } from "../../../inputs/PostsOrderByWithAggregationInput";
import { PostsScalarWhereWithAggregatesInput } from "../../../inputs/PostsScalarWhereWithAggregatesInput";
import { PostsWhereInput } from "../../../inputs/PostsWhereInput";
import { PostsScalarFieldEnum } from "../../../../enums/PostsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostsArgs {
  @TypeGraphQL.Field(_type => PostsWhereInput, {
    nullable: true
  })
  where?: PostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "body" | "createdAt" | "userId">;

  @TypeGraphQL.Field(_type => PostsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
