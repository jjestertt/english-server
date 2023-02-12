import CardService from "../services/cardService.js";

class CardController {
    async getAllCards(req, res, next) {
        try {
            const cards = await CardService.getAllCard()
            res.send(cards)
        } catch (e) {
            next(e)
        }
    }
    async getCardById(req, res, next) {
        try {
            const {id} = req.params
            const card = await CardService.getCardById(id)

            res.send(card)
        } catch (error) {
            next(error)
        }
    }
    async createCard(req, res, next) {
        try {
            const card = await CardService.createCard(req.body)
            res.status(201).send(card)
        } catch (e) {
            next(e)
        }
    }
    async updateCard(req, res, next) {
        try {
            const {id} = req.params
            const card = await CardService.updateCard(id, req.body)
            res.status(200).send(card)
        } catch (e) {
            next(e)
        }
    }
}

export default new CardController()