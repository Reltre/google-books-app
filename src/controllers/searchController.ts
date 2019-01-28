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
      const rawData = await BookRetrieval.search(req.query.search)
      const bookData = await BookDataTransformer.parse(rawData)
      res.status(200).render(
        'index', 
        {books: bookData, listFormat: SearchController.helpers.listFormat}
      );
    } else {
      res.status(200).render('index', {books: []});
    }
  }
}
