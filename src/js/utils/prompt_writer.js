const typingSpeed = 22; //ms

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