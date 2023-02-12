const baseUrl = 'https://english-server-production-6ade.up.railway.app/api'
const list = document.querySelector('.list')

let cards = []


//API
const getAllCards = async () => {
    const response = await fetch(baseUrl + '/cards')
    return await response.json()
}

const updateCard = async (id, title, description) => {
    const body = {}

    if (title) {
        body.title = title
    }
    if (description) {
        body.description = description
    }


    const responce = await fetch(baseUrl + '/card/' + id, {
        method: 'put',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    })
    return await responce.json()
}



//UI
const renderCards = (cards) => {
    list.innerHTML = ''

    cards.forEach((card) => {
        const element = document.createElement('li')
        element.innerHTML = `${card.title} ${card.description} ---- id: ${card._id}`

        list.appendChild(element)
    })
}
const updateFormListener = () => {
    const titleInput = document.querySelector('.title')
    const descriptionInput = document.querySelector('.description')
    const idInput = document.querySelector('.id')
    const updateButton = document.querySelector('.updateButton')


    updateButton.addEventListener('click', async () => {
        const id = idInput.value
        const title = titleInput.value
        const description = descriptionInput.value

        const newCard = await updateCard(id, title, description)

        const newCards = cards.map(card => {
            if (card._id === newCard._id) {
                return newCard
            }

            return card
        })

        cards = JSON.parse(JSON.stringify(newCards))
        renderCards(cards)
    })
}

const app = async () => {
    cards = await getAllCards()
    renderCards(cards)
    updateFormListener()
}

app()
