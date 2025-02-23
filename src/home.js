import { lorem } from './utils'
import burritoPng from './static/burrito.png'
import spicesPng from './static/spices.png'
import anotherPng from './static/another.png'

// TODO: move this somewhere else
const imgs = [burritoPng, spicesPng, anotherPng,]
const headers = ['Burritos!', 'Ingredients', 'Another Heading']
const text = [
    'Some info about burritos.' + lorem.generateParagraphs(2),
    'Some info about ingredients.' + lorem.generateParagraphs(2),
    'Some extra info about something.' + lorem.generateParagraphs(2),
]

const content = document.querySelector('#content')

export function loadHome() {
    console.log('loading home');
    for (const headerIdx in headers) {
        content.appendChild(createHomeDiv(headers[headerIdx], imgs[headerIdx], text[headerIdx]))
    }
}

function createImg(img) {
    const imgElement = document.createElement('img')
    imgElement.src = img
    imgElement.classList.add('home-img')
    return imgElement
}

function createText(header, text) {
    const textDiv = document.createElement('div')

    const h2 = document.createElement('h2')
    h2.textContent = header

    const p = document.createElement('p')
    p.textContent = text

    textDiv.append(h2, p)
    return textDiv
}

function createHomeDiv(header, img, text) {
    // div 
    //     img
    //     div  
    //         h2 /h2 
    //         p /p
    //     /div 
    // /div
    const containerDiv = document.createElement('div')
    containerDiv.classList.add('content-block')

    const imgElement = createImg(img)

    const textDiv = createText(header, text)

    containerDiv.append(imgElement, textDiv)
    return containerDiv
}