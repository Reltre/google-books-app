import { BookRetrieval } from '../lib/bookRetrievalService'
import { BookDataTransformer } from '../lib/bookDataTransformerService';

export class SearchController {
  static helpers = {
    formatForDisplay: (authors: Array<string>) => {
      if (authors.length === 2) {
        return SearchController.helpers.joinAnd(authors)
      } else if (authors.length > 2) {
        return SearchController.helpers.joinIntoListWithAnd(authors)
      } else {
        return SearchController.helpers.singleAuthor(authors)
      }
    }, joinAnd: (authors: Array<string>) => {
      return authors.join(" and ")
    }, joinIntoListWithAnd: (authors: Array<string>) => {
      const allButLastAuthor = authors.slice(0, -1).join(", ")
      const conjunction = ", and "
      return allButLastAuthor
        .concat(conjunction)
        .concat(authors.slice(-1)[0])
    }, singleAuthor: (authors: Array<string>) => {
      return authors.slice(0)
    }
  }

  async index(req: any, res: any) {
    res.status(200).render('index', {books: []});
  }

  async search(req: any, res: any) {
    try {
      const rawData = await BookRetrieval.search(req.query.q)
      await SearchController.validateThatBookDataIsPresent(rawData)
      const bookData = await BookDataTransformer.parseBookInfoList(rawData.items)
      res.status(200).render(
        'index', 
        { 
          books: bookData,
          formatForDisplay: SearchController.helpers.formatForDisplay
        }
      );
    } catch(err) {
      console.log(err.message)
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
