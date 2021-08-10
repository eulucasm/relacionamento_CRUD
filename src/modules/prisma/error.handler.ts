import { HttpException, HttpStatus } from '@nestjs/common';
 
export const PrismaErrorHandler = (error: Error) => {
  return new HttpException(error, HttpStatus.BAD_REQUEST)
}