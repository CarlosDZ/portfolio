const terminalHeaderText = "<CarlosDZ's Console>";
const consoleUser = "(carlos@portfolio ~) $ ";
const promptText = "cat welcome.txt";
const responseText = ">> Hi! Im Carlos Delgado and this is my portfolio. Feel free to navigate through the following sections:";
const opt1Text = ">>> About me";
const opt2Text = ">>> Projects";
const opt3Text = ">>> Experience";
const opt4Text = ">>> Tech Stack";
const opt5Text = ">>> Contact";

import {sleep, writeElement} from './utils/prompt_writer.js';
import { writeProjectPage } from './projects.js';
import {show} from './main.js';

export async function writeHomePage() {
    document.getElementById("terminalHeaderText").textContent = terminalHeaderText;
    document.getElementById("promptText").textContent = consoleUser;
    await sleep(500);
    await writeElement(promptText, "promptText");
    await sleep(300);
    await writeElement(responseText, "responseText");
    await sleep(200);
    await writeElement(opt1Text, "opt1Text");
    const boton1 = document.getElementById("boton_para_ir_a_about_me");
    boton1.addEventListener("click", () => {
        show("about_me");
    });

    await writeElement(opt2Text, "opt2Text");
    const boton2 = document.getElementById("boton_para_ir_a_proyectos");
    boton2.addEventListener("click", () => {
        show("projects");
    });

    await writeElement(opt3Text, "opt3Text");
    const boton3 = document.getElementById("boton_para_ir_a_experiencia");
    boton3.addEventListener("click", () => {
        show("experience");
    });

    await writeElement(opt4Text, "opt4Text");
    await writeElement(opt5Text, "opt5Text");
}