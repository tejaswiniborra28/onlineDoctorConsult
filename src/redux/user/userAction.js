import { REGISTER ,MAILEXISTS} from './userActionTypes'

export const register = (id,value) => {
    return {
        type: REGISTER,
        id: id,
        payload: value
    }
}


export const mailExists = (value) => {
    return {
        type: MAILEXISTS,
        payload: value
    }
}