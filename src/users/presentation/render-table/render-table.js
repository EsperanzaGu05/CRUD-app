import usersStore from '../../store/users-store';
import { showModal } from '../render-modal/render-modal';
import '../render-table/render-table.css'
import { deleteUser } from '../../use-cases/delte-user-by-id';

let table;

const createTable = (element) => {

    const table = document.createElement('table')
    const tableHeaders = document.createElement('thead')
    tableHeaders.innerHTML = `
    <tr>
    <th>ID</th>
    <th>Balance</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Active</th>
    <th>Actions</th>
    </tr>`

    const tableBody = document.createElement('tbody')
    table.append(tableHeaders, tableBody)

    return table
}

const tableSelectListener = (event) => {
    const element = event.target.closest('.select-user')
    if (!element) return
    const id = element.getAttribute('data-id')
    showModal(id)
}

const tableDeleteListener = async (event) => {
    const element = event.target.closest('.delete-user')
    if (!element) return
    const id = element.getAttribute('data-id')
    try {
        await deleteUser(id)
        await usersStore.reloadPage()
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage()
        renderTable()
    }
    catch {
        console.log('error');
    }

}

export const renderTable = (element) => {
    const users = usersStore.getUsers()

    if (!table) {
        table = createTable()
        element.append(table)

        table.addEventListener('click', event => tableSelectListener(event))
        table.addEventListener('click', event => tableDeleteListener(event))

    }

    let tableHTML = ''
    users.forEach(user => {
        tableHTML += `
        <tr>
    <td>${user.id}</td>
    <td>${user.balance}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.isActive}</td>
    <td>
        <a hrf ='#/' class='select-user' data-id = ${user.id}>Select</a>
        |
         <a hrf ='#/' class='delete-user' data-id = ${user.id}>Delete</a>
    </td>
    </tr>
        `
    })

    table.querySelector('tbody').innerHTML = tableHTML
}