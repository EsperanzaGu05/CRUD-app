const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = () => {
    throw new console.error('Not implemented');

}

const loadPreviousPage = () => {
    throw new console.error('Not implemented');
}

const onUserChange = () => {
    throw new console.error('Not implemented');
}

const reloadPage = () => {
    throw new console.error('Not implemented');
}


export default {
    loadNextPage, loadPreviousPage, onUserChange, reloadPage,
    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
}