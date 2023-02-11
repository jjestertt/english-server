import { Router }  from "express"
import {getAllCards, getCard, updateCard} from "../controller/cardController.js";
export const cardRouter = new Router()

cardRouter.get('/cards', getAllCards)
cardRouter.get('/card', getCard)
cardRouter.put('/card', updateCard)

