import { BookEntity } from '@/infrastructure/entities/book.entity'
import { EntityRepository, Repository } from 'typeorm'
import { BookDTO } from '@/shared/book.dto'

@EntityRepository(BookEntity)
export class BookRepository extends Repository<BookEntity> {
  async findAll(): Promise<BookEntity[]> {
    return await this.find()
  }

  async addNew(data: BookDTO): Promise<BookEntity> {
    return await this.save(data)
  }
}
