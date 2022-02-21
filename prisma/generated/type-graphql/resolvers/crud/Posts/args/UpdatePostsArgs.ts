import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUpdateInput } from "../../../inputs/PostsUpdateInput";
import { PostsWhereUniqueInput } from "../../../inputs/PostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePostsArgs {
  @TypeGraphQL.Field(_type => PostsUpdateInput, {
    nullable: false
  })
  data!: PostsUpdateInput;

  @TypeGraphQL.Field(_type => PostsWhereUniqueInput, {
    nullable: false
  })
  where!: PostsWhereUniqueInput;
}
