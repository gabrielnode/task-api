import { Module } from '@nestjs/common'
import { BookController } from '@/presentation/controller'
import { UsecasesModule } from '@/usecases'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BookRepository } from '@/infrastructure/repositories'
import { InfrastructureModule } from '@/infrastructure'

@Module({
  imports: [UsecasesModule.register()],
  controllers: [BookController]
})
export class PresentationModule {}
