const typingSpeed = 16; //ms

export const writeElement = (text, elementID) => {
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

export const writeElement_withElementAsAnEntry = (text, elemento) => {
    return new Promise((resolve) => {
        let i = 0;

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

export const writeElement_withElementAsAnEntry_selectSpeed = (text, elemento, speed) => {
    return new Promise((resolve) => {
        let i = 0;

        const interval = setInterval(() => {
        elemento.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            resolve();
        }
        }, speed);
    });
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}