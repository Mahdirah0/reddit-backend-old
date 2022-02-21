import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsCreateNestedManyWithoutUserInput } from "../inputs/PostsCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UsersCreateInput", {
  isAbstract: true
})
export class UsersCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => PostsCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  posts?: PostsCreateNestedManyWithoutUserInput | undefined;
}
