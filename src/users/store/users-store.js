import { loadUserByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    const users = await loadUserByPage(state.currentPage + 1)
    if (users.length === 0) return;

    state.currentPage += 1
    state.users = users

}

const loadPreviousPage = async () => {
    if (state.currentPage === 1) return;
    const users = await loadUserByPage(state.currentPage - 1)

    if (users.length === 0) return;

    state.currentPage -= 1
    state.users = users
}

const onUserChange = () => {
    throw new Error('Not implemented');
}

const reloadPage = () => {
    throw new Error('Not implemented');
}


export default {
    loadNextPage, loadPreviousPage, onUserChange, reloadPage,
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage
}