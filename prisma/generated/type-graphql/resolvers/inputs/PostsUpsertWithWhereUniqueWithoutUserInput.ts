import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsCreateWithoutUserInput } from "../inputs/PostsCreateWithoutUserInput";
import { PostsUpdateWithoutUserInput } from "../inputs/PostsUpdateWithoutUserInput";
import { PostsWhereUniqueInput } from "../inputs/PostsWhereUniqueInput";

@TypeGraphQL.InputType("PostsUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class PostsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => PostsWhereUniqueInput, {
    nullable: false
  })
  where!: PostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PostsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PostsCreateWithoutUserInput, {
    nullable: false
  })
  create!: PostsCreateWithoutUserInput;
}
