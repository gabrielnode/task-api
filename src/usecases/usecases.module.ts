import { DynamicModule, Module } from '@nestjs/common'
import { BookUsecase } from '@/usecases/books'
import { InfrastructureModule } from '@/infrastructure'

@Module({
  imports: [InfrastructureModule] // deverá importar no modulo o repository para que usecase enxergar o repository, não necessitando injetar nos providers
})
export class UsecasesModule {
  static register(): DynamicModule {
    return {
      module: UsecasesModule,
      providers: [
        {
          provide: BookUsecase,
          useClass: BookUsecase
        }
      ],
      exports: [BookUsecase]
    }
  }
}
