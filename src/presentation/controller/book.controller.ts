import { BookDTO, BooksDTO } from '@/shared'
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

  @Post('add-books')
  async addBooks(@Body() data: BooksDTO) {
    const { books } = data
    return await this.bookUsecase.addBooks(books)
  }
}
