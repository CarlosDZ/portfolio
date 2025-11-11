const terminalHeaderText = "<CarlosDZ's Console>";
const promptText = "(carlos@portfolio ~) $  cat welcome.txt";
const responseText = "Hi! Im Carlos Delgado and this is my portfolio. Feel free to navigate through the following sections:";
const opt1Text = ">>> About me";
const opt2Text = ">>> Projects";
const opt3Text = ">>> Experience";
const opt4Text = ">>> Technologies";
const opt5Text = ">>> Contact";

const typingSpeed = 32; //ms

const writeElement = (text, elementID) => {
    return new Promise((resolve) => {
        let i = 0;
        const elemento = document.getElementById(elementID);

        const interval = setInterval(() => {
        elemento.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            resolve();
        }
        }, typingSpeed);
    });
}

export async function writeHomePage() {
    await writeElement(terminalHeaderText, "terminalHeaderText");
    await writeElement(promptText, "promptText");
    await writeElement(responseText, "responseText");
    await writeElement(opt1Text, "opt1Text");
    await writeElement(opt2Text, "opt2Text");
    await writeElement(opt3Text, "opt3Text");
    await writeElement(opt4Text, "opt4Text");
    await writeElement(opt5Text, "opt5Text");
}