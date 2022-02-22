import { Module } from '@nestjs/common'
import { BookRepository } from '@/infrastructure/repositories'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BookEntity } from '@/infrastructure/entities'

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, BookRepository])],
  exports: [TypeOrmModule]
})
export class InfrastructureModule {}
