import {writeHomePage} from './home.js';
import { writeProjectPage } from './projects.js';

export function show(view) {
    fetch(`/src/views/${view}.html`)
    .then(res => res.text())
    .then(html => {
        document.getElementById("app").innerHTML = html;
        if (view === "home") {
            writeHomePage();
        }
        else if(view === "projects"){
            writeProjectPage();
        }
    })
    .catch(err => console.log("Error loading view:", err));
}

show("home");
