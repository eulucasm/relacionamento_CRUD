import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class Car {

  @Field(type => Int,{nullable:true})
  id?: number

  @Field(type => String,{nullable:true})
  name: string

  @Field(type => String,{nullable:true})
  color: string

  @Field(type => Int,{nullable:true})
  id_model: number
  
  @Field(type => Int,{nullable:true})
  age: number

}