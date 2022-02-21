import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PostsScalarWhereInput", {
  isAbstract: true
})
export class PostsScalarWhereInput {
  @TypeGraphQL.Field(_type => [PostsScalarWhereInput], {
    nullable: true
  })
  AND?: PostsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsScalarWhereInput], {
    nullable: true
  })
  OR?: PostsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsScalarWhereInput], {
    nullable: true
  })
  NOT?: PostsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  body?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;
}
