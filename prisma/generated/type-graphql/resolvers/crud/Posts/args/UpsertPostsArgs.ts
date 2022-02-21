import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsCreateInput } from "../../../inputs/PostsCreateInput";
import { PostsUpdateInput } from "../../../inputs/PostsUpdateInput";
import { PostsWhereUniqueInput } from "../../../inputs/PostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPostsArgs {
  @TypeGraphQL.Field(_type => PostsWhereUniqueInput, {
    nullable: false
  })
  where!: PostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostsCreateInput, {
    nullable: false
  })
  create!: PostsCreateInput;

  @TypeGraphQL.Field(_type => PostsUpdateInput, {
    nullable: false
  })
  update!: PostsUpdateInput;
}
