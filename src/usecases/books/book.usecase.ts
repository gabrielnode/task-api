import { BookRepository } from '@/infrastructure/repositories'
import { BookDTO } from '@/shared'
import { Injectable } from '@nestjs/common'

@Injectable()
export class BookUsecase {
  constructor(private readonly bookRepository: BookRepository) {}

  async getBookAll() {
    return this.bookRepository.findAll()
  }

  async addBook(data: BookDTO) {
    return this.bookRepository.addNew(data)
  }

  async addBooks(data: BookDTO[]) {
    return this.bookRepository.addManyNew(data)
  }
}
