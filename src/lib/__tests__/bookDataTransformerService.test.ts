import { BookDataTransformer, BookInfo, IBookInfo }from '../bookDataTransformerService'
import { sampleBookData } from '../fixtures/sampleBookData'

const details: IBookInfo = {
  authors: sampleBookData.items[0].volumeInfo.authors,
  title: sampleBookData.items[0].volumeInfo.title,
  publisher: sampleBookData.items[0].volumeInfo.publisher,
  image: sampleBookData.items[0].volumeInfo.imageLinks.thumbnail,
  url: sampleBookData.items[0].volumeInfo.infoLink
}

test("book info contains an author property", () => {
  const info = new BookInfo(details)
  expect(info).toHaveProperty('authors')
})
test("book info contains a title property", () => {
  const info = new BookInfo(details)
  expect(info).toHaveProperty('title')
})
test("book info contains a publishingCompany property", () => {
  const info = new BookInfo(details)
  expect(info).toHaveProperty('publisher')
})
test("book info contains an image property", () => {
  const info = new BookInfo(details)
  expect(info).toHaveProperty('image')
})
test('book has property url', () => {
  const info = new BookInfo(details)
  expect(info).toHaveProperty('url')
})
