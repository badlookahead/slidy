if (window.localStorage.getItem("theme") == null) {
    window.localStorage.setItem("theme", "dark");
}

if (window.localStorage.getItem("hover") == null) {
    window.localStorage.setItem("hover", "n");
}

console.log(window.localStorage.getItem("theme"))

let theme = document.getElementById("theme");
let hover = document.getElementById("hover");
let root = document.querySelector(":root");

theme.innerText = window.localStorage.getItem("theme");

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
    if (window.localStorage.getItem("hover") == "n") {
        hover.innerText = "on"
        window.localStorage.setItem("hover", "y");
    } else {
        hover.innerText = "off"
        window.localStorage.setItem("hover", "n");
    }
})

document.getElementById("settings-modal").inert = true;

document.getElementById("settings-button").addEventListener("click", () => {
    document.getElementById("settings-modal").showModal();
    document.getElementById("settings-modal").inert = false;
})

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("settings-modal").close();
    document.getElementById("settings-modal").inert = true;
})