import * as express from 'express'
import { SearchController } from '../controllers/searchController'
const router = express.Router()

router.get('/', new SearchController().index)
router.get('/search', new SearchController().search)
router.get('*', function(req, res) {
  return res.status(404).render('index', {notfound: true});
});
export default router