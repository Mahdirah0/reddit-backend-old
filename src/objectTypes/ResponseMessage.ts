import { Field, ObjectType } from 'type-graphql';
import { Users } from '../../prisma/generated/type-graphql';

@ObjectType()
class FieldError {
  @Field()
  field: String;

  @Field()
  message: String;
}

@ObjectType()
export default class ResponseMessage {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Users, { nullable: true })
  user?: Users;

  @Field(() => String, { nullable: true })
  message?: String;

  @Field(() => String, { nullable: true })
  token?: String;
}
