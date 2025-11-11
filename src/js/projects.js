const unpressed_button_image = '/public/imgs/projects/unpressed_button_with_background.png';
const pressed_button_image = '/public/imgs/projects/pressed_button_with_background.png';
const images_route = '/public/imgs/projects/';

import {writeElement} from './utils/prompt_writer.js';

const terminalHeaderText = "<CarlosDZ's Console>";
const promptText = "(carlos@portfolio ~) $  cat project_welcome.txt; ls projects";
const responseText = ">> Those are the public projects that i've worked on!. If any of them awakes your interest, just push the button and you will be redirected to his page:";

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
        });
        btn.addEventListener("mouseup", () => {
            imagen_boton.src = unpressed_button_image;
            window.open(redirect_url, "_blank");
        });
        btn.addEventListener("mouseleave", () => {
            imagen_boton.src = unpressed_button_image;
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
    await writeElement(terminalHeaderText, "terminalHeaderText");
    await writeElement(promptText, "promptText");
    await writeElement(responseText, "responseText");
    createProjectButton("beer_with_no_background.png", "TPV Hosteler-a", ["Java Swing","MySQL"], null);
    createProjectButton("vault_logo_with_no_background.png", "Vault", ["Web Design","Frontend"], null);
}