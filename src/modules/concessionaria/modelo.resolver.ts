import { Parent, Args, ResolveField, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
import {Modelo} from './modelo.model';
import {CreateModeloDataInput,DeleteModeloDataInput,GetModeloDataInput,ListDataModeloInput,UpdateModeloDataInput} from './dto/modelo.input'
import {ModeloRepository} from './modelo.repository'

@Resolver(of => Modelo)
export class ModeloResolver {
  
  constructor(
    private modeloRepository: ModeloRepository,
  ) { }

  @Query(type => Modelo)
    async getModeloData(
      @Args('GetModeloDataInput') query: GetModeloDataInput
    ) {
      return await this.modeloRepository.get({id:query.id});
    }

  @Mutation(type => Modelo)
    async createModelo(
      @Args('CreateModeloDataInput') data: CreateModeloDataInput,
    ) {
      return await this.modeloRepository.create(data);
    }
  
  @Mutation(type => Modelo)
    async updateModelo(
      @Args('UpdateModeloDataInput') {id, ...data}: UpdateModeloDataInput
    ) {
      return await this.modeloRepository.update({id},data);
    }
  
  @Mutation(type => Modelo)
    async deleteModelo(
      @Args('DeleteModeloDataInput') {id}: DeleteModeloDataInput,
    ) {
      return await this.modeloRepository.delete({id});
    }
  
  @Query(type => [Modelo])
    async listModelo(
      @Args('ListDataModeloInput') query: ListDataModeloInput,
    ) {
      return await this.modeloRepository.list({deleted_at:null});
    }
  

};