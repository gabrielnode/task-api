import { IBook } from '@/domain/model'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('book')
export class BookEntity implements IBook {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  price: number
}
