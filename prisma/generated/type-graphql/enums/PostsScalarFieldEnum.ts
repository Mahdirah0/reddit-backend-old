import * as TypeGraphQL from "type-graphql";

export enum PostsScalarFieldEnum {
  id = "id",
  title = "title",
  body = "body",
  createdAt = "createdAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(PostsScalarFieldEnum, {
  name: "PostsScalarFieldEnum",
  description: undefined,
});
