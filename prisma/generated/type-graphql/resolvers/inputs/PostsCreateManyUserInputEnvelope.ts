import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostsCreateManyUserInput } from "../inputs/PostsCreateManyUserInput";

@TypeGraphQL.InputType("PostsCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class PostsCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PostsCreateManyUserInput], {
    nullable: false
  })
  data!: PostsCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
