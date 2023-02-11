import CardModel from "../models/cardModel.js";
import {validateEmptyData, validateEmptyKeys, validateId} from "../utils/validate.js";

class CardService {
    async getAllCard() {
        return CardModel.find({})
    }
    async getCardById(id) {
        validateId(id)
        const card = await CardModel.findOne({_id: id})
        validateEmptyData('card', card)
        return card
    }
    async createCard(data) {
        return CardModel.create(data)
    }
    async updateCard(id, data) {
        validateId(id)
        validateEmptyKeys(data)
        const card = await CardModel.findOneAndUpdate({_id: id}, data, {
            new: true
        })
        validateEmptyData('card', card)
        return card
    }
}

export default new CardService()