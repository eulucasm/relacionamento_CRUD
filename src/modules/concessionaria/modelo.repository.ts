import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ModeloRepository {
  constructor(
    private prisma: PrismaService,
  ) { } 

  async get(where) {
    return await this.prisma.modelo.findUnique({where});
  }

  async create(data) {
    return await this.prisma.modelo.create({data});
  }
  
  async update(where, data) {
    return await this.prisma.modelo.update({where, data});
  }

  async delete(where) {
    return await this.prisma.modelo.update({where,data:{deleted_at:null}});
  }

  async list(where) {
    return await this.prisma.modelo.findMany({where});
  }
 

}