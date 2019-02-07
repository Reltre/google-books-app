import * as express from 'express'
import SearchRouter from './routes/search'
var path = require('path')

const app = express()
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', SearchRouter)
export default app