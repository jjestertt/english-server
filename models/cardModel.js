import {model, Schema} from "mongoose";

const cardSchema = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true}
    },
    {strict: 'throw'}
)

const CardModel = model('card', cardSchema);

export default CardModel