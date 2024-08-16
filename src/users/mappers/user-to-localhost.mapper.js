import { User } from "../models/user"

export const userModelToLocalHost = (user) => {

    const { id, isActive, balance, avatar, firstName, lastName, genre } = user

    return { id, isActive, balance, avatar, first_name: firstName, last_name: lastName, genre }
}