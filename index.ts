import * as express from 'express'
const port = process.env.port || 8080
const app = express()

app().listen(port, () => console.log(`App listening on port ${port}!`))