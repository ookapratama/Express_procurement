import express from 'express'
import { errorHandler as appHandler } from './utils/errorHandler'


const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.use(appHandler)

app.listen(() => {
  console.log(`Express is running on port ${process.env.PORT}`)
})

export default app