import {isValidObjectId} from "mongoose";
import {toCapitalize} from "./string.js";
import ApiError from "../exeptions/apiError.js";

export const validateId = (id) => {
    if (!isValidObjectId(id)) {
        throw ApiError.BadRequest('Id is not valid.')
    }
}
export const validateEmptyData = (name, data) => {
    if (!data) {
        throw ApiError.BadRequest(`The ${name} is not exist.`)
    }
}
export const validateEmptyKeys = (obj) => {
    for(let key in obj) {
        if (!obj[key]) {
            throw ApiError.BadRequest(`${toCapitalize(key)} must not be empty!`)
        }
    }
}