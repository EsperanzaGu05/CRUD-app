import { localUserToModel } from '../mappers/localhost-user-mapper'
import { userModelToLocalHost } from '../mappers/user-to-localhost.mapper'
import { User } from '../models/user'

export const saveUser = async (userLike) => {
    const user = new User(userLike)

    if (!user.firstName || !user.lastName) throw 'Last Name and First Name are requeried'
    const userToSave = userModelToLocalHost(user)

    let userUpdated;
    if (user.id) {
        userUpdated = await updateUser(user)
        //to update an extisted one
    } else {
        userUpdated = await createUser(userToSave)
    }

    return localUserToModel(userUpdated)
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

const updateUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const updatedUser = await res.json()
    console.log({ updatedUser });
    return updatedUser
}