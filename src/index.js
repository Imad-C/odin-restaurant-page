import './styles.css'
import { loadHome } from './home.js'
import { loadMenu } from './menu.js'
import { loadAbout } from './about.js'

const conent = document.querySelector('#content');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu'); // TODO
const about = document.querySelector('#about'); // TODO

function clearContent() {
    conent.textContent = '';
}

function handleNavClick(loadingFunction) {
    clearContent();
    loadingFunction()
}

home.addEventListener('click', () => {handleNavClick(loadHome)});
menu.addEventListener('click',  () => {handleNavClick(loadMenu)});
about.addEventListener('click',  () => {handleNavClick(loadAbout)});

loadHome() // default on home page