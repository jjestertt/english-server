import { Router }  from "express"
export const cardRouter = new Router()

import CardController from "../controller/cardController.js";

cardRouter.get('/cards', CardController.getAllCards)
cardRouter.get('/card/:id', CardController.getCardById)
cardRouter.post('/card', CardController.createCard)
cardRouter.put('/card/:id', CardController.updateCard)

