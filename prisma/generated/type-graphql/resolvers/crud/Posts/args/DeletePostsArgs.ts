import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsWhereUniqueInput } from "../../../inputs/PostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePostsArgs {
  @TypeGraphQL.Field(_type => PostsWhereUniqueInput, {
    nullable: false
  })
  where!: PostsWhereUniqueInput;
}
