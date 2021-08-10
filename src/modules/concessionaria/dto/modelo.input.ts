import { InputType, Field, Int, registerEnumType } from '@nestjs/graphql';

@InputType()
export class GetModeloDataInput{
    @Field(type => Int)
    readonly id?: number
}

@InputType()
export class CreateModeloDataInput {

  @Field(type => String,{nullable:true})
  name: string

  @Field(type => String,{nullable:true})
  type: string

}

@InputType()
export class UpdateModeloDataInput {

  @Field(type => Int)
  readonly id?: number

  @Field(type => String,{nullable:true})
  name: string

  @Field(type => String,{nullable:true})
  type: string
}

@InputType()
export class DeleteModeloDataInput {
  @Field(type => Int)
  readonly id?: number
  
}

@InputType()
export class ListDataModeloInput {

  @Field(type => String)
  readonly search?: string
  
}