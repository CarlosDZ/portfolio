const terminalHeaderText = "<CarlosDZ's Console>";
const consoleUser = "(carlos@portfolio ~/Experience) $ ";
const promptText = "cat experience_welcome.txt; bash button.sh; ls *.experience";
const responseText = ">> Here are the places that i've worked and studied on. On addition to this, I have worked on a lot of personal projects that you can se on the <PROJECTS> section.";
const returnButtonText ="<RETURN HOME>";

import {writeElement, sleep, writeElement_withElementAsAnEntry, writeElement_withElementAsAnEntry_selectSpeed} from './utils/prompt_writer.js';
import { show } from './main.js';

export function createWorkplace(name, time, position, description) {
    fetch('/src/views/components/workplace.html')
    .then(res => res.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const workplace_container = doc.querySelector(".workplace_container");

        writeElement_withElementAsAnEntry(position, workplace_container.querySelector('#workplace_position'));
        writeElement_withElementAsAnEntry_selectSpeed(description, workplace_container.querySelector('#workplace_description'), 8);

        writeElement_withElementAsAnEntry(name, workplace_container.querySelector('#workplace_name'));
        writeElement_withElementAsAnEntry(time, workplace_container.querySelector('#workplace_time'));

        document.getElementById("experience_area").appendChild(workplace_container);
    })
    .catch(err => console.log("Error creating the experience section:", err));
}

export async function writeExperiencePage() {
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

    createWorkplace("Recambios Belizon", "(July 2025 - Present)", "IT", 
        "Here I was in charge of digitizing inventories and the accounting of the company, working with the program ISI Parts (A standard among vehicle spare parts distribution companies).\nI did also learn some offimatic skills like using Excel on an advanced level (Formulas, Power Query, etc...) and device and network administration. Working here i developped an app to help employees search on a provider database using keywords, brand names, etc... On top of that, I deployed the application in different devices using enviroment variables and I deployed a centralized MySQL database on the company's server, where this application's data is stored. Right now, I'm focushing more on my studies and personal projects, but I still help with maintenance and administration tasks punctually."
    );
    await sleep(500);
    createWorkplace("CodeArts Solutions", "(February 2025 - March 2025)", "Student on practices", 
        "Here I learned to use tools like Docker, Next.js, PHP and express, while strengthening previous knowledge on Git and Github.\nDuring this period I did also get familiar with MongoDB and how fullstack developments work, by making a test web about recipes, conecting it's backend to a MongoDB Atlas container and serving it with Vercel."
    );
    await sleep(500);
    createWorkplace("Cesur Zaragoza", "(September 2024 - Present)", "Web App Development Student", 
        "This is where im getting my degree on Web App Development. While studying here, I've worked on numerous projects and learned about technologies like MySQL, PostgreSQL, Docker, Apache, Nginx, Java, Javascript, HTML5, CSS, Web design, etc... \nStuding here has also brough me the opportunity of working on projects as a team, usually with platforms like Github and Linear."
    );
}