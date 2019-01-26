import { BookDataTransformer, BookInfo }from '../bookDataTransformerService'


test("book info contains an author property", () => {
  const info = new BookInfo()
  expect(info).toHaveProperty('author')
})
test("book info contains a title property", () => {
  const info = new BookInfo()
  expect(info).toHaveProperty('title')
})
test("book info contains a publishingCompany property", () => {
  const info = new BookInfo()
  expect(info).toHaveProperty('publishingCompany')
})
test("book info contains an image property", () => {
  const info = new BookInfo()
  expect(info).toHaveProperty('image')
})
test('book has property url')
