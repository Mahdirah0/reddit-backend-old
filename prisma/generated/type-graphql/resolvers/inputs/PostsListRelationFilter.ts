import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsWhereInput } from "../inputs/PostsWhereInput";

@TypeGraphQL.InputType("PostsListRelationFilter", {
  isAbstract: true
})
export class PostsListRelationFilter {
  @TypeGraphQL.Field(_type => PostsWhereInput, {
    nullable: true
  })
  every?: PostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostsWhereInput, {
    nullable: true
  })
  some?: PostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostsWhereInput, {
    nullable: true
  })
  none?: PostsWhereInput | undefined;
}
