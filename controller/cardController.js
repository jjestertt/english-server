import CardService from "../services/cardService.js";

class CardController {
    async getAllCards(req, res) {
        try {
            const cards = await CardService.getAllCard()
            res.send(cards)
        } catch (e) {
            res.send(e)
        }
    }
    async getCardById(req, res) {
        try {
            const {id} = req.params
            const card = await CardService.getCardById(id)

            res.send(card)
        } catch (error) {
            res.send(error)
        }
    }
    async createCard(req, res) {
        try {
            const card = await CardService.createCard(req.body)
            res.status(201).send(card)
        } catch (e) {
            res.send(e)
        }
    }
    async updateCard(req, res) {
        try {
            const {id} = req.params
            const card = await CardService.updateCard(id, req.body)
            res.status(200).send(card)
        } catch (e) {
            res.send(e)
        }
    }
}

export default new CardController()