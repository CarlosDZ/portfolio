import {writeHomePage} from './home.js';

function show(view) {
    fetch(`/src/views/${view}.html`)
    .then(res => res.text())
    .then(html => {
        document.getElementById("app").innerHTML = html;
        if (view === "home") {
            writeHomePage();
        }
    })
    .catch(err => console.log("Error loading view:", err));
}

show("home");