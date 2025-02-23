import { lorem } from './utils'
import burritoPng from './static/burrito.png'
import spicesPng from './static/spices.png'
import anotherPng from './static/another.png'

// TODO: move this somewhere else
const imgs = [burritoPng, spicesPng, anotherPng,]
const headers = ['Burritos!', 'Ingredients', 'Another Heading']
const text = [
    'Some info about burritos. ' + lorem.generateParagraphs(3),
    'Some info about ingredients. ' + lorem.generateParagraphs(3),
    'Some extra info about something. ' + lorem.generateParagraphs(3),
]

const content = document.querySelector('#content')

export function loadHome() {
    console.log('loading home');
    let picOnLeft

    for (const headerIdx in headers) {
        picOnLeft = headerIdx % 2 === 0
        content.appendChild(createHomeDiv(
            headers[headerIdx], imgs[headerIdx], text[headerIdx], picOnLeft))
    }
}

function createImg(img) {
    const imgElement = document.createElement('img')
    imgElement.src = img
    imgElement.classList.add('Home__Image')
    return imgElement
}

function createHomeDiv(header, img, text, picOnLeft=true) {
    // div
    //     h2 /h2 
    //     div 
    //         img
    //         p /p
    //     /div
    // /div
    const containerDiv = document.createElement('div')

    const homeH2 = document.createElement('h2')
    homeH2.classList.add('Home__Heading')
    if (!picOnLeft) homeH2.classList.add('Home__Heading-right')
    homeH2.textContent = header

    const texdImageDiv = document.createElement('div')
    texdImageDiv.classList.add('Home__Content')

    const imgElement = createImg(img)

    const homeP = document.createElement('p')
    homeP.textContent = text

    picOnLeft ? texdImageDiv.append(imgElement, homeP) : texdImageDiv.append(homeP, imgElement)
    containerDiv.append(homeH2, texdImageDiv)
    return containerDiv
}