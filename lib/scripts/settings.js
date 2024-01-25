if (window.localStorage.getItem("theme") == null) {
    window.localStorage.setItem("theme", "dark");
}

if (window.localStorage.getItem("hover") == null) {
    window.localStorage.setItem("hover", "false");
}

if (window.localStorage.getItem("radius") == null) {
    window.localStorage.setItem("radius", "8");
}

if (window.localStorage.getItem("bright") == null) {
    window.localStorage.setItem("bright", "128");
}

let modal = document.getElementById("settings-modal");
let theme = document.getElementById("theme");
let hover = document.getElementById("hover");
let clear = document.getElementById("clear");
let radius = document.getElementById("radius");
let bright = document.getElementById("bright");
let root = document.querySelector(":root");

if (window.localStorage.getItem("theme") == "light") {
    theme.innerText = "light"
    window.localStorage.setItem("theme", "light");
    root.style.setProperty("--bg", "whitesmoke")
    root.style.setProperty("--text", "#151515")
} else {
    theme.innerText = "dark"
    window.localStorage.setItem("theme", "dark");
    root.style.setProperty("--bg", "#151515")
    root.style.setProperty("--text", "whitesmoke")
}

radius.value = window.localStorage.getItem("radius");
root.style.setProperty("--radius", window.localStorage.getItem("radius"));

bright.value = window.localStorage.getItem("bright");

for (let i = 0; i < modal.querySelectorAll("#settings-modal a").length; i++) {
    modal.querySelectorAll("#settings-modal a")[i].addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            modal.querySelectorAll("#settings-modal a")[i].click();
        }
    })
}

theme.addEventListener("click", () => {
    if (window.localStorage.getItem("theme") == "dark") {
        theme.innerText = "light"
        window.localStorage.setItem("theme", "light");
        root.style.setProperty("--bg", "whitesmoke")
        root.style.setProperty("--text", "#151515")
    } else {
        theme.innerText = "dark"
        window.localStorage.setItem("theme", "dark");
        root.style.setProperty("--bg", "#151515")
        root.style.setProperty("--text", "whitesmoke")
    }
})

hover.addEventListener("click", () => {
    if (!JSON.parse(window.localStorage.getItem("hover"))) {
        hover.innerText = "on"
        window.localStorage.setItem("hover", "true");
    } else {
        hover.innerText = "off"
        window.localStorage.setItem("hover", "false");
    }
})

clear.addEventListener("click", () => {
    if (confirm("Are you SURE about that?\nThis will reset all settings and sessions that are not exported")) {
        window.localStorage.clear();
        window.location.reload();
    }
})

radius.addEventListener("blur", () => {
    if (radius.value < 0) {
        radius.value = 0;
    }

    window.localStorage.setItem("radius", radius.value);
    root.style.setProperty("--radius", radius.value+"px");
})

bright.addEventListener("blur", () => {
    if(bright.value > 255){
        bright.value = 255;
    } if(bright.value < 0){
        bright.value = 0;
    }

    window.localStorage.setItem("bright", bright.value);
    drawGame();
})

modal.inert = true;

document.getElementById("settings-button").addEventListener("click", () => {
    modal.showModal();
    modal.inert = false;
})

document.getElementById("settings-button").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        modal.showModal();
        modal.inert = false;
    }
})

document.getElementById("close-modal").addEventListener("click", () => {
    modal.close();
    modal.inert = true;
})

document.getElementById("close-modal").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        modal.close();
        modal.inert = true;
    }
})