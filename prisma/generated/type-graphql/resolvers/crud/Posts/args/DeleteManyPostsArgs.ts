import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsWhereInput } from "../../../inputs/PostsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPostsArgs {
  @TypeGraphQL.Field(_type => PostsWhereInput, {
    nullable: true
  })
  where?: PostsWhereInput | undefined;
}
