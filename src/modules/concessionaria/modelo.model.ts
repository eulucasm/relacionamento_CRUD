import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Modelo {
  @Field(type => Int,{nullable:true})
  id?: number
  
  @Field(type => String,{nullable:true})
  name: string

  @Field(type => String,{nullable:true})
  type: string


}