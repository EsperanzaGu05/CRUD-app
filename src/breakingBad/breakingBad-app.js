const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const data = await res.json()
    console.log(data);
    return data[0]

}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const breakingBadComponent = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Braking Bad App'
    element.innerHTML = 'Loading ...'
    // const quote = await fetchQuote()
    // element.innerHTML = 'We have data'

    const quoteLabel = document.createElement('blockquote')
    const authorLabel = document.createElement('h3')
    const nextButton = document.createElement('button')

    nextButton.innerText = 'Next Quote'

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote
        authorLabel.innerHTML = data.author
        element.replaceChildren(quoteLabel, authorLabel, nextButton)
    }

    fetchQuote().then(data => renderQuote(data))


    nextButton.addEventListener('click', async () => {
        nextButton.disabled = true
        element.innerHTML = 'Loading ...'
        const quote = await fetchQuote()
        renderQuote(quote)
        nextButton.disabled = false
    })
}




