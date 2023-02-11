import express from "express";
import mongoose from 'mongoose'
import {cardRouter} from "./routes/cardsRoutes.js";
import cors from "cors"
import bodyParser from "body-parser";

const port = process.env.PORT || 9000
const mongoKey = "mongodb+srv://root:wCBySsKXzfjhBKlB@cluster0.z79bpvq.mongodb.net/?retryWrites=true&w=majority"

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api', cardRouter)

const start = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(mongoKey);
    console.log('Database connected')

    app.listen(port, () => {
      console.log(`Server start ${port}`)
    })
  } catch (e) {
    console.log(e)
  }
}


start()