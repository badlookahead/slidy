if (window.localStorage.getItem("theme") == null) {
    window.localStorage.setItem("theme", "dark");
}

if (window.localStorage.getItem("hover") == null) {
    window.localStorage.setItem("hover", "false");
}

if (window.localStorage.getItem("radius") == null) {
    window.localStorage.setItem("radius", "8");
}

let theme = document.getElementById("theme");
let hover = document.getElementById("hover");
let clear = document.getElementById("clear");
let radius = document.getElementById("radius");
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
        radius.value = 0
    }

    window.localStorage.setItem("radius", radius.value);
    root.style.setProperty("--radius", radius.value+"px");
})

document.getElementById("settings-modal").inert = true;

document.getElementById("settings-button").addEventListener("click", () => {
    document.getElementById("settings-modal").showModal();
    document.getElementById("settings-modal").inert = false;
})

document.getElementById("settings-button").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        document.getElementById("settings-modal").showModal();
        document.getElementById("settings-modal").inert = false;
    }
})

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("settings-modal").close();
    document.getElementById("settings-modal").inert = true;
})

document.getElementById("close-modal").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        document.getElementById("settings-modal").close();
        document.getElementById("settings-modal").inert = true;
    }
})