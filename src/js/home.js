const terminalHeaderText = "<CarlosDZ's Console>";
const promptText = "(carlos@portfolio ~) $  cat welcome.txt";
const responseText = ">> Hi! Im Carlos Delgado and this is my portfolio. Feel free to navigate through the following sections:";
const opt1Text = ">>> About me";
const opt2Text = ">>> Projects";
const opt3Text = ">>> Experience";
const opt4Text = ">>> Technologies";
const opt5Text = ">>> Contact";

import {writeElement} from './utils/prompt_writer.js';
import { writeProjectPage } from './projects.js';
import {show} from './main.js';

export async function writeHomePage() {
    await writeElement(terminalHeaderText, "terminalHeaderText");
    await writeElement(promptText, "promptText");
    await writeElement(responseText, "responseText");
    await writeElement(opt1Text, "opt1Text");

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