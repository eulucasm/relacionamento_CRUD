import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import {ModeloResolver} from './modelo.resolver';
import {ModeloRepository} from './modelo.repository';


@Module({
    imports: [],
    providers: [
      ModeloRepository,
      PrismaService,
      ModeloResolver
    ],
    exports: []
  })
  export class ModeloModule { }