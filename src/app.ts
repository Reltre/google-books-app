import * as express from 'express'
import SearchRouter from './routes/search'

const app = express()
app.use('/', SearchRouter)
export default app