import HTML from './render-modal.html?raw'
import './render-modal.css'

let modal, form;

export const showModal = () => {
    modal?.classList.remove('hide-content')
}

export const hideModal = () => {
    modal?.classList.add('hide-content')
    form?.reset()
}

export const renderModal = (element, callback) => {
    if (modal) return;

    modal = document.createElement('div')
    modal.innerHTML = HTML
    modal.className = 'modal-container hide-content'
    form = modal.querySelector('form')

    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container') {
            hideModal()
        }
    })

    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const userLike = {};

        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = +value
                continue
            }
            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true : false;
                continue
            }
            userLike[key] = value;
        }

        await callback(userLike)
        hideModal()
    })
    element.append(modal)
}