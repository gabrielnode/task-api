import { BookDTO } from '@/shared'
import { BookUsecase } from '@/usecases/books'
import { Body, Controller, Get, Post } from '@nestjs/common'

@Controller('book')
export class BookController {
  constructor(private readonly bookUsecase: BookUsecase) {}

  @Get()
  async getBookAll() {
    return await this.bookUsecase.getBookAll()
  }

  @Post()
  async addBook(@Body() data: BookDTO) {
    return await this.bookUsecase.addBook(data)
  }
}
