import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsCreateManyUserInputEnvelope } from "../inputs/PostsCreateManyUserInputEnvelope";
import { PostsCreateOrConnectWithoutUserInput } from "../inputs/PostsCreateOrConnectWithoutUserInput";
import { PostsCreateWithoutUserInput } from "../inputs/PostsCreateWithoutUserInput";
import { PostsWhereUniqueInput } from "../inputs/PostsWhereUniqueInput";

@TypeGraphQL.InputType("PostsCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class PostsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PostsCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostsWhereUniqueInput], {
    nullable: true
  })
  connect?: PostsWhereUniqueInput[] | undefined;
}
