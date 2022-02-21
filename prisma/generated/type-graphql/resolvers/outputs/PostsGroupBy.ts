import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsCountAggregate } from "../outputs/PostsCountAggregate";
import { PostsMaxAggregate } from "../outputs/PostsMaxAggregate";
import { PostsMinAggregate } from "../outputs/PostsMinAggregate";

@TypeGraphQL.ObjectType("PostsGroupBy", {
  isAbstract: true
})
export class PostsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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
