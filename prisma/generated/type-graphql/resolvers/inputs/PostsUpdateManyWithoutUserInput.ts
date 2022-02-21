import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsCreateManyUserInputEnvelope } from "../inputs/PostsCreateManyUserInputEnvelope";
import { PostsCreateOrConnectWithoutUserInput } from "../inputs/PostsCreateOrConnectWithoutUserInput";
import { PostsCreateWithoutUserInput } from "../inputs/PostsCreateWithoutUserInput";
import { PostsScalarWhereInput } from "../inputs/PostsScalarWhereInput";
import { PostsUpdateManyWithWhereWithoutUserInput } from "../inputs/PostsUpdateManyWithWhereWithoutUserInput";
import { PostsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PostsUpdateWithWhereUniqueWithoutUserInput";
import { PostsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PostsUpsertWithWhereUniqueWithoutUserInput";
import { PostsWhereUniqueInput } from "../inputs/PostsWhereUniqueInput";

@TypeGraphQL.InputType("PostsUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class PostsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PostsCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PostsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostsCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostsCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostsWhereUniqueInput], {
    nullable: true
  })
  set?: PostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsWhereUniqueInput], {
    nullable: true
  })
  delete?: PostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsWhereUniqueInput], {
    nullable: true
  })
  connect?: PostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PostsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PostsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostsScalarWhereInput[] | undefined;
}
