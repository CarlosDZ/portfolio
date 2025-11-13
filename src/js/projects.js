const unpressed_button_image = '/public/imgs/projects/unpressed_button_with_background.png';
const pressed_button_image = '/public/imgs/projects/pressed_button_with_background.png';
const images_route = '/public/imgs/projects/';

import {writeElement, sleep} from './utils/prompt_writer.js';
import { show } from './main.js';

const terminalHeaderText = "<CarlosDZ's Console>";
const consoleUser = "(carlos@portfolio ~/Projects) $  ";
const promptText = "cat project_welcome.txt; bash button.sh; ls *.project";
const responseText = ">> Those are the public projects that i've worked on!. If any of them awakes your interest, just push the button and you will be redirected to his page:";
const returnButtonText ="<RETURN HOME>";

function createProjectButton(image_name, name, technologies, redirect_url) {
    fetch('/src/views/components/project_button.html')
    .then(res => res.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const projectSection = doc.querySelector(".project_container");

        const imagen_boton = projectSection.querySelector("#imagen_boton");
        imagen_boton.src = unpressed_button_image;

        const imagen_proyecto = projectSection.querySelector("#imagen_proyecto");
        imagen_proyecto.src = images_route + image_name;

        const btn = projectSection.querySelector("#boton_presionable_proyecto");
        btn.addEventListener("mousedown", () => {
            imagen_boton.src = pressed_button_image;
            imagen_proyecto.style.transform = "translate(10px, 10px)";
        });
        btn.addEventListener("mouseup", () => {
            imagen_boton.src = unpressed_button_image;
            window.open(redirect_url, "_blank");
            imagen_proyecto.style.transform = "translate(-0px, 0px)";
        });
        btn.addEventListener("mouseleave", () => {
            imagen_boton.src = unpressed_button_image;
            imagen_proyecto.style.transform = "translate(0px, 0px)";
        });

        projectSection.querySelector("#project_title").textContent = name;

        const techTable = projectSection.querySelector("#project_tech_list");
        technologies.forEach(tech => {
            const li = document.createElement("li");
            li.textContent = tech;
            techTable.appendChild(li);
        });

        document.getElementById("projects_area").appendChild(projectSection);
    })
    .catch(err => console.log("Error creating project button:", err));
}


export async function writeProjectPage(){
    document.getElementById("terminalHeaderText").textContent = terminalHeaderText;
    document.getElementById("promptText").textContent = consoleUser;
    await sleep(500);
    await writeElement(promptText, "promptText");
    await sleep(300);
    await writeElement(responseText, "responseText");
    await sleep(200);

    
    document.getElementById("returnHomeButton").style.display = "flex";
    writeElement(returnButtonText, "returnhometext");
    document.getElementById("returnHomeButton").addEventListener("click", () =>{
        show('home');
    });

    createProjectButton("beer_with_no_background.png", "TPV Hosteler-a", ["Java Swing","MySQL"], "https://github.com/javiifu/Hosteler-a.git");
    await sleep(500);
    createProjectButton("vault_logo_with_no_background.png", "Vault", ["Web Design","Frontend"], "https://github.com/CarlosDZ/Vault.git");
    await sleep(500);
    createProjectButton("magic_card_with_no_background.png", "Spain cEDH (TFG)", ["Fullstack","MongoDB"], "https://github.com/CarlosDZ/TFG-Web-cEDH.git");
    await sleep(500);
    createProjectButton("magnifying_glass_with_no_background.png", "Buscador de proveedores", ["Java Swing","MySQL"], "https://github.com/CarlosDZ/buscador_proveedores_belizon.git");
    await sleep(500);
    createProjectButton("nodoLab_with_no_background.png", "nodoLab Coworking", ["Fullstack","PostgreSQL"], "https://github.com/patatavolc/nodoLab.git");
    await sleep(500);
    createProjectButton("nvim_with_no_background.png", "My Nvim Build", ["Lua","Config Files"], "https://github.com/patatavolc/nvim-personal-build.git");
}