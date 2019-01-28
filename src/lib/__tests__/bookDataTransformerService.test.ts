import { BookDataTransformer, BookInfo, IBookInfo }from '../bookDataTransformerService'
import { sampleBookData } from '../fixtures/sampleBookData'

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

describe('BookTransformer with successful search', () => {
  test('returns an array of BookInfo objects of the correct shape', () => {
    const rawData = sampleBookData
    const bookData = BookDataTransformer.parse(rawData)
    const testData = [
      new BookInfo({
        title: 'Dracula',
        authors: [ 'Stephanie Spinner'],
        publisher: 'Turtleback',
        image: 'http://books.google.com/books/content?id=T1VDAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        url: 'http://books.google.com/books?id=ZYBTswEACAAJ&dq=Dracula&hl=&source=gbs_api'
      }),
      new BookInfo({
        title: 'Dracula',
        authors: [ 'Stephanie Spinner' ],
        publisher: 'Random House Books for Young Readers',
        image: 'http://books.google.com/books/content?id=T1VDAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        url: 'http://books.google.com/books?id=8xliPgAACAAJ&dq=Dracula&hl=&source=gbs_api'
      })
    ]
    expect(bookData).toEqual(testData)
  })

  test('returns BookInfo objects with default image if no image links', () => {
    const rawData = Object.assign({}, sampleBookData)
    delete rawData.items[0].volumeInfo.imageLinks

    const bookData = BookDataTransformer.parse(rawData)
    const missingImageUrl = "images/defaultThumbnail.png"
    const testData = [
      new BookInfo({
        title: 'Dracula',
        authors: [ 'Stephanie Spinner'],
        publisher: 'Turtleback',
        image: missingImageUrl,
        url: 'http://books.google.com/books?id=ZYBTswEACAAJ&dq=Dracula&hl=&source=gbs_api'
      }),
      new BookInfo({
        title: 'Dracula',
        authors: [ 'Stephanie Spinner' ],
        publisher: 'Random House Books for Young Readers',
        image: 'http://books.google.com/books/content?id=T1VDAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        url: 'http://books.google.com/books?id=8xliPgAACAAJ&dq=Dracula&hl=&source=gbs_api'
      })
    ]
    expect(bookData).toEqual(testData)
  })
})

describe('BookTransformer with unsuccessful search', () => {
  test('returns an empty array', () => {
    const rawData = { kind: 'books#volumes', totalItems: 0 }
    const bookData = BookDataTransformer.parse(rawData)
    expect(bookData).toEqual([])
  })
})
