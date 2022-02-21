import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsUpdateWithoutUserInput } from "../inputs/PostsUpdateWithoutUserInput";
import { PostsWhereUniqueInput } from "../inputs/PostsWhereUniqueInput";

@TypeGraphQL.InputType("PostsUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PostsUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PostsWhereUniqueInput, {
    nullable: false
  })
  where!: PostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostsUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PostsUpdateWithoutUserInput;
}
