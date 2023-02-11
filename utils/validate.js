import {isValidObjectId} from "mongoose";
import {toCapitalize} from "./string.js";

export const validateId = (id) => {
    if (!isValidObjectId(id)) {
        throw 'Id is not valid.'
    }
}
export const validateEmptyData = (name, data) => {
    if (!data) {
        throw `The ${name} is not exist.`
    }
}
export const validateEmptyKeys = (obj) => {
    for(let key in obj) {
        if (!obj[key]) {
            throw `${toCapitalize(key)} must not be empty!`
        }
    }
}