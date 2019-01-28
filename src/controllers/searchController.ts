import { BookRetrieval } from '../lib/bookRetrievalService'
import { BookDataTransformer } from '../lib/bookDataTransformerService';
export class SearchController {
  async search(req: any, res: any) {
    if(req.query.search_term) {
      const rawData = await BookRetrieval.search(req.query.search_term)
      const bookData = await BookDataTransformer.parse(rawData)
      res.status(200).render('index', {books: bookData});
    } else {
      res.status(200).render('index', {books: []});
    }
  }
}
