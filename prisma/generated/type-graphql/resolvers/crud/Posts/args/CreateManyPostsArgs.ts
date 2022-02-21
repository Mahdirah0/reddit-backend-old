import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsCreateManyInput } from "../../../inputs/PostsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPostsArgs {
  @TypeGraphQL.Field(_type => [PostsCreateManyInput], {
    nullable: false
  })
  data!: PostsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
