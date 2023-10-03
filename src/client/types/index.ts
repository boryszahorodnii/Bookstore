export enum Category {
  ACTION = 'action',
  WESTERN = 'western',
  HORRON = 'horror',
  DOCUMENTARY = 'documentary',
  DRAMA = 'drama',
}

export enum DialogType {
  ADD_BOOK = 'addBook',
  MODIFY_BOOK = 'modifyBook',
}

export interface BaseBookI {
  name: string;
  price: number;
  category: Category;
  description: string;
}

export interface BookI extends BaseBookI {
  id: number;
}

export interface BooksStateI {
  books: Array<BookI>,
}
