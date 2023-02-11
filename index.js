import express from "express";
import {cardRouter} from "./routes/cardsRoutes.js";
import cors from "cors"

const port = process.env.PORT || 5001

const app = express()

app.use(cors())
app.use('/api', cardRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server start ${port}`)
})