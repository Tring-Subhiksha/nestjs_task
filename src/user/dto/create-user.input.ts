import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInputs {
  @Field()
  fullname: string;
  @Field()
  phoneNumber:number
  @Field({nullable:true})
  createdAt:Date;
}
