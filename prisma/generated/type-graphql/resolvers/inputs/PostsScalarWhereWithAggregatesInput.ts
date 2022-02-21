import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PostsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PostsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  body?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;
}
