import { InputType, Field, Int, registerEnumType } from '@nestjs/graphql';

@InputType()
export class GetCarDataInput{
    @Field(type => Int)
    readonly id?: number
}

@InputType()
export class CreateCarDataInput {

  @Field(type => String,{nullable:true})
  name: string

  @Field(type => String,{nullable:true})
  color: string

  @Field(type => Int,{nullable:true})
  id_model: number

  @Field(type => Int,{nullable:true})
  age: number

}

@InputType()
export class UpdateCarDataInput {

  @Field(type => Int)
  readonly id?: number

  @Field(type => String,{nullable:true})
  name: string

  @Field(type => String,{nullable:true})
  color: string

  @Field(type => String,{nullable:true})
  id_model: string

  @Field(type => Int,{nullable:true})
  age: number
}

@InputType()
export class DeleteCarDataInput {
  @Field(type => Int)
  readonly id?: number
  
}

@InputType()
export class ListDataCarInput {
  @Field(type => String)
  readonly search?: string
  
}