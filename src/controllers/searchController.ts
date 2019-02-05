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
        await this.validateThatBookDataIsPresent(rawData)
        const bookData = await BookDataTransformer.parseBookInfoList(rawData.items)
        res.status(200).render(
          'index', 
          {books: bookData, listFormat: SearchController.helpers.listFormat}
        );
      } catch(err) {
        console.log(err)
        res.status(200).render('index', {books: []});
      }
    } else {
      res.status(200).render('index', {books: []});
    }
  }

  private async validateThatBookDataIsPresent(rawData: any) {
    if (rawData.itemCount == 0) throw new Error('No items for display')
  }
}
