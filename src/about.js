import { content } from './utils'

export function loadAbout() {
    console.log('loading about');
    content.appendChild(createAboutDiv())
}

function createAboutDiv() {
    const menuText = document.createElement('p')
    menuText.textContent = 'About stuff here.'
    return menuText
}