import './styles.css';
import {HomePage} from './home.js';
import {MenuPage} from './menu.js';
import { AboutPage } from './about.js'; 

let homePage = new HomePage();
let menuPage = new MenuPage();
let aboutPage = new AboutPage();
homePage.render();

const content = document.getElementById('content');
const home = document.getElementById('homeBtn');
const menu = document.getElementById('menuBtn');
const about = document.getElementById('aboutBtn');

home.addEventListener('click', () => {
    content.innerHTML = "";
    homePage = new HomePage();
    homePage.render();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

menu.addEventListener('click', () => {
    content.innerHTML = "";
    menuPage = new MenuPage(); 
    menuPage.render();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

about.addEventListener('click', () => {
    content.innerHTML = "";
    aboutPage = new AboutPage();
    aboutPage.render();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

