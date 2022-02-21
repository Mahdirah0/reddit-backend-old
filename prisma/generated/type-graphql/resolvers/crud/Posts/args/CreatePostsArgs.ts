import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsCreateInput } from "../../../inputs/PostsCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePostsArgs {
  @TypeGraphQL.Field(_type => PostsCreateInput, {
    nullable: false
  })
  data!: PostsCreateInput;
}
