import { BookInfo } from '../../models/bookInfo'
import { BookDataTransformer,  }from '../bookDataTransformerService'
import { sampleBookData } from '../../shared/fixtures/sampleBookData'

describe('BookTransformer with successful search', () => {
  test('returns an array of BookInfo objects of the correct shape', () => {
    const rawData = sampleBookData
    const bookData = BookDataTransformer.parseBookInfoList(rawData.items)
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

    const bookData = BookDataTransformer.parseBookInfoList(rawData.items)
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
