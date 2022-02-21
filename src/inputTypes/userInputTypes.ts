import { InputType, Field } from 'type-graphql';
import { MaxLength, Length, maxLength } from 'class-validator';

@InputType()
export class UserInputType {
  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  email: string;

  @Field()
  @Length(6, 255)
  password: string;
}

@InputType()
export class LoginInputType {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class UpdateInputNameType {
  @Field()
  id: string;

  @Field()
  @MaxLength(30)
  name: string;
}
