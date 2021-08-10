import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class CarRepository {
  constructor(
    private prisma: PrismaService,
  ) { } 

  async get(where) {
    return await this.prisma.car.findUnique({where});
  }

  async create(data) {
    return await this.prisma.car.create({data});
  }
  
  async update(where, data) {
    return await this.prisma.car.update({where, data});
  }

  async delete(where) {
    return await this.prisma.car.update({where,data:{deleted_at:null}});
  }

  async list(where) {
    return await this.prisma.car.findMany({where});
  }
 

}