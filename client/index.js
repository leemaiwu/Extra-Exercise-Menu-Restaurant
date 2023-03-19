const wrapper = document.querySelector('.wrapper')
const orderLink = document.querySelector('.order')
const btnPopup = document.querySelector('.order-button')
const toGoRadio = document.getElementById('to-go')
const pickupPopup = document.getElementById('pickup-popup')
const dineInRadio = document.getElementById('dine-in')
const form = document.querySelector('form')
const orderContainer = document.getElementById('orders-container')

const baseURL = 'http://localhost:5500/'

function placeOrder () {
    wrapper.classList.remove('active')
}

function orderWindow () {
    wrapper.classList.add('active-popup')
    form.reset()
}

function hideOrderWindow () {
    wrapper.classList.remove('active-popup')
    }

function displayPickup () {
    if (toGoRadio.checked) {
        pickupPopup.style.display = 'block'
        document.getElementById('pickup-time').setAttribute('required', true)
    }
}

function hidePickup () {
    if (dineInRadio.checked) {
        pickupPopup.style.display = 'none'
        document.getElementById('pickup-time').removeAttribute('required')
    }
}

function submitOrder (event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const meal = document.getElementById('meal').value
    const sides = document.getElementById('sides').value
    const drink = document.getElementById('drink').value
    const inOrGoRadio = document.querySelector(`input[name="in-or-go"]:checked`)
    const inOrGo = inOrGoRadio ? inOrGoRadio.value : null
    const pickupTime = document.getElementById('pickup-time')?.value

    let diningPreference = inOrGo === 'private' ? `To Go, Pickup Time: ${pickupTime}` : 'Dine in'

    const order = document.createElement('div')
    order.classList.add('ordered-list')
    order.innerHTML = `
    <h4>Name: ${name}</h4>
    <p>Meal: ${meal} with ${sides}</p>
    <p>Drink: ${drink}</p>
    <p>${diningPreference}</p>
    `
    orderContainer.appendChild(order)
    hideOrderWindow()
}

orderLink.addEventListener('click', placeOrder)
btnPopup.addEventListener('click', orderWindow)
toGoRadio.addEventListener('change', displayPickup)
dineInRadio.addEventListener('change', hidePickup)
form.addEventListener('submit', submitOrder)
