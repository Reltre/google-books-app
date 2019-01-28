import * as dotenv from "dotenv" 
import axios from "axios"
dotenv.config()

export class BookRetrieval {
  static async search(title: string) {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40`
    )
    return response.data
  }
}