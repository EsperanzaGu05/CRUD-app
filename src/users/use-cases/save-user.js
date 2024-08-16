import { userModelToLocalHost } from '../mappers/user-to-localhost.mapper'
import { User } from '../models/user'

export const saveUser = async (userLike) => {
    const user = new User(userLike)

    if (!user.firstName || !user.lastName) throw 'Last Name and First Name are requeried'
    const userToSave = userModelToLocalHost(user)
    if (user.id) {
        throw 'Not implemented'
        //to update an extisted one
    }

    const updateUser = await createUser(userToSave)
    return updateUser


}

const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const newUser = await res.json()
    console.log({ newUser });
    return newUser
}