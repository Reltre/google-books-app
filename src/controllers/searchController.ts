import { BookRetrieval } from '../lib/bookRetrievalService'
import { BookDataTransformer } from '../lib/bookDataTransformerService';

export class SearchController {
  static helpers = {
    listFormat: (authors: Array<string>) => {
      if (authors.length === 2) {
        return authors.join(" and ")
      } else if (authors.length > 2) {
        const allButLastAuthor = authors.slice(0, -1).join(", ")
        const conjunction = "and "
        return allButLastAuthor.concat(conjunction).concat(authors[-1])
      } else {
        return authors[0]
      }
    }
  }

  async search(req: any, res: any) {
    if(req.query.search) {
      try {
        const rawData = await BookRetrieval.search(req.query.search)
        await SearchController.validateThatBookDataIsPresent(rawData)
        const bookData = await BookDataTransformer.parseBookInfoList(rawData.items)
        res.status(200).render(
          'index', 
          {books: bookData, listFormat: SearchController.helpers.listFormat}
        );
      } catch(err) {
        console.log(err.message)
        res.status(200).render('index', {books: []});
      }
    } else {
      res.status(200).render('index', {books: []});
    }
  }

  private static async validateThatBookDataIsPresent(rawData: any) {
    return new Promise((resolve, reject) => { 
      if (rawData.totalItems === 0) throw new Error('No items for display')
      resolve(true)
    })
  }
}
