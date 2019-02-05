import { BookInfo } from '../models/bookInfo'

export class BookDataTransformer {
  static DEFAULT_THUMBNAIL_PATH = "images/defaultThumbnail.png"

  static parseBookInfoList(items: any) {
    return items.map((bookData: any) => {
      bookData = BookDataTransformer.gatherBookInfoFrom(bookData)
      return new BookInfo(bookData)
    })
  }

  private static gatherBookInfoFrom(bookData: any) {
    return  { 
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      publisher: bookData.volumeInfo.publisher,
      image: BookDataTransformer.setImagePathFrom(bookData),
      url: bookData.volumeInfo.infoLink
    } 
  }

  private static setImagePathFrom(data: any) {
    const bookHasImageLinks =  !!data.volumeInfo.imageLinks

    return bookHasImageLinks ? 
        data.volumeInfo.imageLinks.thumbnail : 
        BookDataTransformer.DEFAULT_THUMBNAIL_PATH
  }
}

