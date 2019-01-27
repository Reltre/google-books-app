import * as express from 'express'
import SearchRouter from './src/routes/search'

const port = process.env.port || 8080
const app = express()
app.use('/', SearchRouter)

app.listen(port, () => console.log(`App listening on port ${port}!`))