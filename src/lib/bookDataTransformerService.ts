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
}