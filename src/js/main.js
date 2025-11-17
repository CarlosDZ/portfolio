import { writeAboutMePage } from './about_me.js';
import { writeExperiencePage } from './experience.js';
import {writeHomePage} from './home.js';
import { writeProjectPage } from './projects.js';
import { writeTechStackPage } from './tech_stack.js';
import { writeContactPage } from './contact.js';

const images_to_precharge = [
    '/public/imgs/projects/beer_with_no_background.png',
    '/public/imgs/projects/magic_card_with_no_background.png',
    '/public/imgs/projects/magnifying_glass_with_no_background.png',
    '/public/imgs/projects/nodoLab_with_no_background.png',
    '/public/imgs/projects/nvim_with_no_background.png',
    '/public/imgs/projects/pressed_button_with_background.png',
    '/public/imgs/projects/unpressed_button_with_background.png',
    '/public/imgs/projects/vault_logo_with_no_background.png',
    '/public/imgs/projects/world_with_no_background.png'
];

images_to_precharge.forEach(src => {
    const img = new Image();
    img.src = src;
});


export function show(view) {
    fetch(`/src/views/${view}.html`)
    .then(res => res.text())
    .then(html => {
        document.getElementById("app").innerHTML = html;
        if (view === "home") {
            writeHomePage();
        }
        else if(view === "projects"){
            writeProjectPage();
        }
        else if(view === "experience"){
            writeExperiencePage();
        }
        else if(view === "about_me"){
            writeAboutMePage();
        }
        else if(view === "tech_stack"){
            writeTechStackPage();
        }
        else if(view === "contact"){
            writeContactPage();
        }
    })
    .catch(err => console.log("Error loading view:", err));
}

show("home");
