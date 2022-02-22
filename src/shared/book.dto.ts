import { IBook } from '@/domain/model'
import { IsNotEmpty, IsString } from 'class-validator'

export class BookDTO implements Omit<IBook, 'id'> {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  price: number
}
