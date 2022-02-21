import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsCountOrderByAggregateInput } from "../inputs/PostsCountOrderByAggregateInput";
import { PostsMaxOrderByAggregateInput } from "../inputs/PostsMaxOrderByAggregateInput";
import { PostsMinOrderByAggregateInput } from "../inputs/PostsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostsOrderByWithAggregationInput", {
  isAbstract: true
})
export class PostsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostsMinOrderByAggregateInput | undefined;
}
