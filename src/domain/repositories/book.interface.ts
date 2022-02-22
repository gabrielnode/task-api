import { IBook } from '@/domain/model'

export interface IBookRepository {
  findAll: () => Promise<IBook[]>
  addNew: (data: IBook) => Promise<IBook>
}
