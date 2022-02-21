import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostsUpdateManyMutationInput } from "../../../inputs/PostsUpdateManyMutationInput";
import { PostsWhereInput } from "../../../inputs/PostsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostsArgs {
  @TypeGraphQL.Field(_type => PostsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostsWhereInput, {
    nullable: true
  })
  where?: PostsWhereInput | undefined;
}
