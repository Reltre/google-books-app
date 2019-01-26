import { url } from "inspector";

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
  static parse(rawData: any) {
    return rawData.items.map( (bookData: any) => {
      return new BookInfo({
        authors: bookData.volumeInfo.authors,
        title: bookData.volumeInfo.title,
        publisher: bookData.volumeInfo.publisher,
        image: bookData.volumeInfo.imageLinks.thumbnail,
        url: bookData.volumeInfo.infoLink
      })
    })
  }
}