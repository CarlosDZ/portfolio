import {writeElement, sleep} from './utils/prompt_writer.js';
import { show } from './main.js';

const terminalHeaderText = "<CarlosDZ's Console>";
const consoleUser = "(carlos@portfolio ~/Contact) $  ";
const promptText = "bash mail_button.sh; bash cv_button.sh";

const returnButtonText ="<RETURN HOME>";


export async function writeContactPage(){
    document.getElementById("terminalHeaderText").textContent = terminalHeaderText;
    document.getElementById("promptText").textContent = consoleUser;
    await sleep(500);
    await writeElement(promptText, "promptText");
    await sleep(300);

    
    document.getElementById("returnHomeButton").style.display = "flex";
    writeElement(returnButtonText, "returnhometext");
    document.getElementById("returnHomeButton").addEventListener("click", () =>{
        show('home');
    });

    const botones = document.querySelectorAll(".botonContactoStyle");
    botones.forEach(boton => {
        boton.addEventListener("mousedown", () => {
            boton.style.transform = "scale(0.9)";
        });

        document.addEventListener("mouseup", () => {
            boton.style.transform = "scale(1)";
        });
        
        document.addEventListener("mouseout", () => {
            boton.style.transform = "scale(1)";
        });
    });
}