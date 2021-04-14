import { Book } from './books.entity';

describe('BooksEntity', () => {
  it('should be defined', () => {
    expect(new Book()).toBeDefined();
  });
});
