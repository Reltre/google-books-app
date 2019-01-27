export interface IBookInfo {
  authors: string[]
  title: string
  publisher: string
  image: string
  url: string
}

export class BookInfo implements IBookInfo {
  authors: string[]
  title: string
  publisher: string
  image: string
  url: string

  constructor({authors, title, publisher, image, url}: IBookInfo) {
    this.authors = authors
    this.title = title
    this.publisher = publisher
    this.image = image
    this.url = url
  }
}

export class BookDataTransformer {
  static DEFAULT_THUMBNAIL_PATH = "src/public/images/defaultThumbnail.png"

  static parse(rawData: any) {
    if (rawData.totalItems === 0) return new Array<string>()

    return rawData.items.map( (bookData: any) => {
      const image = BookDataTransformer.setImagePathFrom(bookData)

      return new BookInfo({
        authors: bookData.volumeInfo.authors,
        title: bookData.volumeInfo.title,
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

