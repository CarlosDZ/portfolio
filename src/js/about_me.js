const terminalHeaderText = "<CarlosDZ's Console>";
const consoleUser = "(carlos@portfolio ~/About_me) $ ";
const promptText = "cat presentation.md";
const responseText = "";
const returnButtonText ="<RETURN HOME>";

const whoami_title = "Who am I?";
const whoami_yap = "I am Carlos Delgado, a Web App Development student from Cadiz, currently living in Zaragoza (Spain). I have been fascinated by technology in general since childhood, and at present I am delving deeper into Backend Development and Fullstack Web Development.\nAdditionally, I am passionate about personalisation, and I am currently working on a Hyprland (Arch) build designed to minimise mouse usage in order to achieve greater productivity.";

const mypath_title = "Where do I come from?";
const mypath_yap = "I was always interested in technology, so I chose the technological branch when I started High School. There, I made my first serious approach to programming, as I had a programming class where I learned the basics of C++. After graduating from High School, I did not have a clear idea of what to study, so I began an Electrical Engineering degree near my hometown. During this year, I realised that the only course that truly sparked my interest was 'Fundamentals of Programming'. I spent part of that year deciding between Computer Engineering, Web App Development, or Multiplatform App Development. By the end of that year, I decided to study Web App Development because I wanted to learn modern programming languages such as JavaScript while working on personal projects, and after completing that, perhaps specialise in Cybersecurity.";

const why_this_title = "Why did I choose this?";
const why_this_yap = "I genuinely enjoy starting a project and witnessing progress unfold in real time. Having an idea and watching it take shape often leads to new discoveries, and this knowledge deepens my understanding of systems we use daily without question, such as the Internet, telecommunication protocols, video games, operating systems, and IoT. What drives me most is curiosity: the desire to face a challenge and search for answers, rather than simply preparing for a test and repeating memorised knowledge. This passion for exploration and problem-solving is what motivates me to pursue Web Development, as it transforms learning into a creative journey rather than a mechanical task.";

const interests_and_skills_title = "Which areas do I work on?";
const interests_and_skills_yap = "I have worked extensively with Java, creating functional interfaces using Java Swing and connecting them to MySQL databases. Currently, most of my academic work involves JavaScript, HTML5, CSS, and PostgreSQL, mainly with Node.js and Express. To broaden my knowledge of different technologies, I am developing my Final Year Project using a MongoDB non-relational database, together with Vue and Tailwind CSS for the frontend. In previous experiences, I also learned the basics of PHP, advanced office software skills such as Excel, and how to use tools like Git, GitHub, Docker, Nginx, and Apache to support development and testing.";

const situation_title = "What I want to do now?";
const situation_yap = "At present, my main objective is to finish my final year of Web App Development in Zaragoza while continuing to work on personal projects. After this, I will begin searching for jobs that allow me to learn new skills or refine those I already possess, most likely while exploring areas that interest me such as Pentesting, Cybersecurity, and Web Development.";

import {sleep, writeElement, writeElement_withSpeed} from './utils/prompt_writer.js';
import {show} from './main.js';

export async function writeAboutMePage() {
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

    writeElement(whoami_title, "whoami");
    writeElement(mypath_title, "mypath");
    writeElement(why_this_title, "why_did_i_choose_this");
    writeElement(interests_and_skills_title, "interests_and_skills");
    await writeElement(situation_title, "actual_situation");

    document.querySelectorAll(".aboutme_separator").forEach(el => {
        el.style.display = "flex";
    });

    writeElement_withSpeed(whoami_yap, "whoyapping", 8);
    writeElement_withSpeed(mypath_yap, "pathyapping", 8);
    writeElement_withSpeed(why_this_yap, "whyyapping", 8);
    writeElement_withSpeed(interests_and_skills_yap, "interestyapping");
    writeElement_withSpeed(situation_yap, "situationyapping", 8);

}