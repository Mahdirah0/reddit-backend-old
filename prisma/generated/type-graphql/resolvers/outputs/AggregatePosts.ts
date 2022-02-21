import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsCountAggregate } from "../outputs/PostsCountAggregate";
import { PostsMaxAggregate } from "../outputs/PostsMaxAggregate";
import { PostsMinAggregate } from "../outputs/PostsMinAggregate";

@TypeGraphQL.ObjectType("AggregatePosts", {
  isAbstract: true
})
export class AggregatePosts {
  @TypeGraphQL.Field(_type => PostsCountAggregate, {
    nullable: true
  })
  _count!: PostsCountAggregate | null;

  @TypeGraphQL.Field(_type => PostsMinAggregate, {
    nullable: true
  })
  _min!: PostsMinAggregate | null;

  @TypeGraphQL.Field(_type => PostsMaxAggregate, {
    nullable: true
  })
  _max!: PostsMaxAggregate | null;
}
