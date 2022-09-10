import { Module } from '@nestjs/common'
import { BookController } from '@/presentation/controller'
import { UsecasesModule } from '@/usecases'
@Module({
  imports: [UsecasesModule.register()],
  controllers: [BookController]
})
export class PresentationModule {}
