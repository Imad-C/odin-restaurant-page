import { content } from './utils'

export function loadMenu() {
    console.log('loading menu');
    content.appendChild(createMenuDiv())
}

function createMenuDiv() {
    const menuText = document.createElement('p')
    menuText.textContent = 'Menu items here!'
    return menuText
}