import * as dotenv from "dotenv" 
import axios from "axios"
dotenv.config()

type volumeInfo = { title: string, authors: Array<string> }
export class BookRetrieval {
  static async search(title: string) {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${title}`
    )
    
    // const bookVolumeInfo: volumeInfo = response.data.volumeInfo
    console.log(response.data)
    return response.data
  }
}