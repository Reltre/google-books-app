import * as express from 'express'
import SearchRouter from './routes/search'

const app = express()
app.set('view engine', 'pug')
app.use('/', SearchRouter)
export default app