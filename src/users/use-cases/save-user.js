import { User } from '../models/user'

export const saveUser = async (userLike) => {
    const user = new User(userLike)

    if (user.id) {
        throw 'Not implemented'
        //to update an extisted one
    }

    const updateUser = await createUser(user)
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