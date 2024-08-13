import usersStore from "../../store/users-store"
import { renderTable } from "../render-table/render-table";
import "./render-buttons.css";

export const renderButtons = (element) => {

    const prevButton = document.createElement('button')
    prevButton.innerText = '  <  Prev'

    const nextButton = document.createElement('button')
    nextButton.innerText = 'Next  >  '

    const currentPageLaberl = document.createElement('span')
    currentPageLaberl.id = 'current-page'
    currentPageLaberl.innerText = usersStore.getCurrentPage()

    element.append(prevButton, currentPageLaberl, nextButton)

    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage()
        currentPageLaberl.innerText = usersStore.getCurrentPage()
        renderTable(element)
    })


    prevButton.addEventListener('click', async () => {
        await usersStore.loadPreviousPage()
        currentPageLaberl.innerText = usersStore.getCurrentPage()
        renderTable(element)
    })
}