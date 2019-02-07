import { BookInfo, IBookInfo } from '../../models/bookInfo'
import { sampleBookData } from '../../shared/fixtures/sampleBookData'

const details: IBookInfo = {
  authors: sampleBookData.items[0].volumeInfo.authors,
  title: sampleBookData.items[0].volumeInfo.title,
  publisher: sampleBookData.items[0].volumeInfo.publisher,
  image: sampleBookData.items[0].volumeInfo.imageLinks.thumbnail,
  url: sampleBookData.items[0].volumeInfo.infoLink
}

describe('BookInfo class structure', () => {
  test("contains an author property", () => {
    const info = new BookInfo(details)
    expect(info).toHaveProperty('authors')
  })
  test("contains a title property", () => {
    const info = new BookInfo(details)
    expect(info).toHaveProperty('title')
  })
  test("contains a publishingCompany property", () => {
    const info = new BookInfo(details)
    expect(info).toHaveProperty('publisher')
  })
  test("contains an image property", () => {
    const info = new BookInfo(details)
    expect(info).toHaveProperty('image')
  })
  test("contains a url property", () => {
    const info = new BookInfo(details)
    expect(info).toHaveProperty('url')
  })
})