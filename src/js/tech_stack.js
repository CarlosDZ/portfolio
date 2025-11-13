const terminalHeaderText = "<CarlosDZ's Console>";
const consoleUser = "(carlos@portfolio ~/Tech_stack) $ ";
const promptText = "cat tech_stack.txt";
const responseText = "";
const returnButtonText ="<RETURN HOME>";

const vControlAndCollab = "Version Control & Collaboration";
    const git = "Git";
    const github = "Github";
    const linear = "Linear"
    const slack = "Slack";

const languagues = "Programming Languages";
    const java = "Java";
    const javascript = "JavaScript";
    const php = "PHP";

const frontend = "Frontend Development";
    const html5 = "HTML5";
    const css = "CSS";
    const tailwind = "Tailwind.css";
    const vue = "Vue";
    const nextjs = "Next.js"

const backend = "Backend Development";
    const nodejs = "Node.js";
    const express = "Express";
    const restapi = "REST API";

const databases = "Databases";
    const mysql = "MySQL";
    const postgresql = "PostgreSQL";
    const mongodb = "MongoDB";
    const mongodbatlas = "MongoDB Atlas";

const desktopdevelopment = "Desktop Development";
    const javaswing = "Java Swing";

const hosting = "Deployment & Hosting";
    const vercel = "Vercel";
    const cloudflare = "Cloudflare";

const webandinfrastructure = "Web Servers & Infrastructure";
    const apache = "Apache";
    const nginx = "Nginx";
    const cronjobs = "Cronjobs";

const toolsanduttility = "Tools & Utilities";
    const insomnia = "Insomnia API Testing";

const offimatic = "Offimatic & IT Administration";
    const excelformulas = "Excel Formulas";
    const excelpowerquery = "Excel PowerQuery";
    const networkmanagement = "Network Management";
    const usersandgroupsmanagement = "Users and Groups Management";


import {sleep, writeElement} from './utils/prompt_writer.js';
import {show} from './main.js';

export async function writeTechStackPage() {
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

    writeElement(vControlAndCollab, "vControlAndCollab");
    writeElement(languagues, "languagues");
    writeElement(frontend, "frontend");
    writeElement(backend, "backend");
    writeElement(databases, "databases");
    writeElement(desktopdevelopment, "desktopdevelopment");
    writeElement(hosting, "hosting");
    writeElement(webandinfrastructure, "webandinfrastructure");
    writeElement(toolsanduttility, "toolsanduttility");
    await writeElement(offimatic, "offimatic");

    document.querySelectorAll("li").forEach(el => {
        el.style.listStyleType = "disc";
    });

    writeElement(git, "git");
    writeElement(github, "github");
    writeElement(linear, "linear");
    writeElement(slack, "slack");

    writeElement(java, "java");
    writeElement(javascript, "javascript");
    writeElement(php, "php");

    writeElement(html5, "html5");
    writeElement(css, "css");
    writeElement(tailwind, "tailwind");
    writeElement(vue, "vue");
    writeElement(nextjs, "nextjs");

    writeElement(nodejs, "nodejs");
    writeElement(express, "express");
    writeElement(restapi, "restapi");

    writeElement(mysql, "mysql");
    writeElement(postgresql, "postgresql");
    writeElement(mongodb, "mongodb");
    writeElement(mongodbatlas, "mongodbatlas");

    writeElement(javaswing, "javaswing");

    writeElement(vercel, "vercel");
    writeElement(cloudflare, "cloudflare");

    writeElement(apache, "apache");
    writeElement(nginx, "nginx");
    writeElement(cronjobs, "cronjobs");
    
    writeElement(insomnia, "insomnia");

    writeElement(excelformulas, "excelformulas");
    writeElement(excelpowerquery, "excelpowerquery");
    writeElement(networkmanagement, "networkmanagement");
    writeElement(usersandgroupsmanagement, "usersandgroupsmanagement");
}