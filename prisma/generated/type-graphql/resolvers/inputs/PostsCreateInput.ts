import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateNestedOneWithoutPostsInput } from "../inputs/UsersCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType("PostsCreateInput", {
  isAbstract: true
})
export class PostsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  user!: UsersCreateNestedOneWithoutPostsInput;
}
