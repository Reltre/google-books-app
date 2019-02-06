import * as express from 'express'
import { SearchController } from '../controllers/searchController'
const router = express.Router()

router.get('/', new SearchController().index)
router.get('/search', new SearchController().search)
export default router