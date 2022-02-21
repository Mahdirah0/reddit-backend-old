import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsScalarWhereInput } from "../inputs/PostsScalarWhereInput";
import { PostsUpdateManyMutationInput } from "../inputs/PostsUpdateManyMutationInput";

@TypeGraphQL.InputType("PostsUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class PostsUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => PostsScalarWhereInput, {
    nullable: false
  })
  where!: PostsScalarWhereInput;

  @TypeGraphQL.Field(_type => PostsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostsUpdateManyMutationInput;
}
