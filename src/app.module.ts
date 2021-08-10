import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaModule} from './modules/prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CarModule } from './modules/carros/car.module';
import { ModeloModule } from './modules/concessionaria/modelo.module';

@Module({
  imports: [
    CarModule,
    ModeloModule,
    PrismaModule,
    GraphQLModule.forRoot({
    playground: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    cors: {
      origin: true
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}