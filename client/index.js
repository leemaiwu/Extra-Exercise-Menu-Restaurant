const wrapper = document.querySelector('.wrapper')
const orderLink = document.querySelector('.order')
const btnPopup = document.querySelector('.order-button')
const toGoRadio = document.getElementById('to-go')
const pickupPopup = document.getElementById('pickup-popup')
const dineInRadio = document.getElementById('dine-in')

function placeOrder () {
    wrapper.classList.remove('active')
}

function orderWindow () {
    wrapper.classList.add('active-popup')
}

function displayPickup () {
    if (toGoRadio.checked) {
        pickupPopup.style.display = 'block'
    }
}

function hidePickup () {
    if (dineInRadio.checked) {
        pickupPopup.style.display = 'none'
    }
}

orderLink.addEventListener('click', placeOrder)
btnPopup.addEventListener('click', orderWindow)
toGoRadio.addEventListener('change', displayPickup)
dineInRadio.addEventListener('change', hidePickup)
