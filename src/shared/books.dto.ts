import { IsArray } from 'class-validator'
import { BookDTO } from './book.dto'

export class BooksDTO {
  @IsArray()
  books: BookDTO[]
}
