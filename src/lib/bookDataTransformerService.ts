import { BookInfo } from '../models/bookInfo'

export class BookDataTransformer {
  static DEFAULT_THUMBNAIL_PATH = "images/defaultThumbnail.png"

  static parse(rawData: any) {
    if (rawData.totalItems === 0) return new Array<string>()
    return rawData.items.map( (bookData: any) => {
      const image = BookDataTransformer.setImagePathFrom(bookData)
      return new BookInfo({
        title: bookData.volumeInfo.title,
        authors: bookData.volumeInfo.authors,
        publisher: bookData.volumeInfo.publisher,
        image,
        url: bookData.volumeInfo.infoLink
      })
    })
  }

  private static setImagePathFrom(data: any) {
    const bookHasImageLinks =  !!data.volumeInfo.imageLinks

    return bookHasImageLinks ? 
        data.volumeInfo.imageLinks.thumbnail : 
        BookDataTransformer.DEFAULT_THUMBNAIL_PATH
  }
}

