import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsCreateWithoutUserInput } from "../inputs/PostsCreateWithoutUserInput";
import { PostsWhereUniqueInput } from "../inputs/PostsWhereUniqueInput";

@TypeGraphQL.InputType("PostsCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class PostsCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => PostsWhereUniqueInput, {
    nullable: false
  })
  where!: PostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostsCreateWithoutUserInput, {
    nullable: false
  })
  create!: PostsCreateWithoutUserInput;
}
