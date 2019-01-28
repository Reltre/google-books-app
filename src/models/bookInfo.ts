export interface IBookInfo {
  title: string
  authors: string[]
  publisher: string
  image: string
  url: string
}

export class BookInfo implements IBookInfo {
  title: string
  authors: string[]
  publisher: string
  image: string
  url: string

  constructor({title, authors, publisher, image, url}: IBookInfo) {
    this.title = title
    this.authors = authors
    this.publisher = publisher
    this.image = image
    this.url = url
  }
}