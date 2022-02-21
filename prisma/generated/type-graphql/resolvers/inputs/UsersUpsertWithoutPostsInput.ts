import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutPostsInput } from "../inputs/UsersCreateWithoutPostsInput";
import { UsersUpdateWithoutPostsInput } from "../inputs/UsersUpdateWithoutPostsInput";

@TypeGraphQL.InputType("UsersUpsertWithoutPostsInput", {
  isAbstract: true
})
export class UsersUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutPostsInput, {
    nullable: false
  })
  create!: UsersCreateWithoutPostsInput;
}
