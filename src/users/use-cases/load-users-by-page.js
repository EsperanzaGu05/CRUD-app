import { localUserToModel } from "../mappers/localhost-user-mapper"

export const loadUserByPage = async (page = 1) => {

    const url = `${(import.meta.env.VITE_BASE_URL)}/users?_page=${page}`
    const res = await fetch(url)
    const data = await res.json()
    const users = data.map(user => localUserToModel(user))
    // console.log(data.data);
    // console.log(users);
    return users
}