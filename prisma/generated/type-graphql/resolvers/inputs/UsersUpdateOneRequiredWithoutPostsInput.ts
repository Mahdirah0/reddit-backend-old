import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutPostsInput } from "../inputs/UsersCreateOrConnectWithoutPostsInput";
import { UsersCreateWithoutPostsInput } from "../inputs/UsersCreateWithoutPostsInput";
import { UsersUpdateWithoutPostsInput } from "../inputs/UsersUpdateWithoutPostsInput";
import { UsersUpsertWithoutPostsInput } from "../inputs/UsersUpsertWithoutPostsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneRequiredWithoutPostsInput", {
  isAbstract: true
})
export class UsersUpdateOneRequiredWithoutPostsInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutPostsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutPostsInput | undefined;
}
