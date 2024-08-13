import { User } from "../models/user"

export const localUserToModel = (localHostUser) => {

    const { id, isActive, balance, avatar, first_name, last_name, genre } = localHostUser

    return new User({ id, isActive, balance, avatar, firstName: first_name, lastName: last_name, genre })
}