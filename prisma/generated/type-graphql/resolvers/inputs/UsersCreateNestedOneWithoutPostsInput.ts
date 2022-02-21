import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutPostsInput } from "../inputs/UsersCreateOrConnectWithoutPostsInput";
import { UsersCreateWithoutPostsInput } from "../inputs/UsersCreateWithoutPostsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutPostsInput", {
  isAbstract: true
})
export class UsersCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutPostsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
