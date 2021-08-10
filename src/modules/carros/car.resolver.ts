import { Parent, Args, ResolveField, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
import {Car} from './car.model';
import {CreateCarDataInput,DeleteCarDataInput,GetCarDataInput,ListDataCarInput,UpdateCarDataInput} from './dto/car.input'
import {CarRepository} from './car.repository'

@Resolver(of => Car)
export class CarResolver {
  
  constructor(
    private carRepository: CarRepository,
  ) { }

  @Query(type => Car)
    async getCarData(
      @Args('GetCarDataInput') query: GetCarDataInput
    ) {
      return await this.carRepository.get({id:query.id});
    }

  @Mutation(type => Car)
    async createCar(
      @Args('CreateCarDataInput') data: CreateCarDataInput,
    ) {
      return await this.carRepository.create({
        name :data.name,
        color:data.color,
        age:data.age,
        model:{connect:{id:data.id_model}}
      });
    }
  
  @Mutation(type => Car)
    async updateCar(
      @Args('UpdateCarDataInput') {id, ...data}: UpdateCarDataInput
    ) {
      return await this.carRepository.update({id},{
        name :data.name,
        color:data.color,
        age:data.age,
        model:{connect:{id:data.id_model}}
      });
    }
  
  @Mutation(type => Car)
    async deleteCar(
      @Args('DeleteCarDataInput') {id}: DeleteCarDataInput,
    ) {
      return await this.carRepository.delete({id});
    }
  
  @Query(type => [Car])
    async listCar(
      @Args('ListDataCarInput') query: ListDataCarInput,
    ) {
      return await this.carRepository.list({deleted_at:null});
    }
  

};