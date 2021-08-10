import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import {CarResolver} from './car.resolver';
import {CarRepository} from './car.repository';


@Module({
    imports: [],
    providers: [
      CarRepository,
      PrismaService,
      CarResolver
    ],
    exports: []
  })
  export class CarModule { }