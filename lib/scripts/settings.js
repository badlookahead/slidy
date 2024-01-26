if (window.localStorage.getItem("theme") == null) {
    window.localStorage.setItem("theme", "dark");
}

if (window.localStorage.getItem("hover") == null) {
    window.localStorage.setItem("hover", "false");
}

if (window.localStorage.getItem("radius") == null) {
    window.localStorage.setItem("radius", "5");
}

if (window.localStorage.getItem("border") == null) {
    window.localStorage.setItem("border", "2");
}

if (window.localStorage.getItem("bright") == null) {
    window.localStorage.setItem("bright", "128");
}

if (window.localStorage.getItem("debug") == null) {
    window.localStorage.setItem("debug", "false");
}

let modal = document.getElementById("settings-modal");
let theme = document.getElementById("theme");
let hover = document.getElementById("hover");
let clear = document.getElementById("clear");
let radius = document.getElementById("radius");
let border = document.getElementById("border");
let bright = document.getElementById("bright");
let debug = document.getElementById("debug");
let root = document.querySelector(":root");

if (window.localStorage.getItem("theme") == "light") {
    theme.innerText = "light";
    root.style.setProperty("--bg", "whitesmoke");
    root.style.setProperty("--text", "#151515");
} else {
    theme.innerText = "dark";
    root.style.setProperty("--bg", "#151515");
    root.style.setProperty("--text", "whitesmoke");
}

if (JSON.parse(window.localStorage.getItem("hover"))) {
    hover.innerText = "on";
} else {
    hover.innerText = "off";
}

radius.value = window.localStorage.getItem("radius");
root.style.setProperty("--radius", window.localStorage.getItem("radius")+"px");

border.value = window.localStorage.getItem("border");
root.style.setProperty("--border", window.localStorage.getItem("border")+"px");

bright.value = window.localStorage.getItem("bright");

if (JSON.parse(window.localStorage.getItem("debug"))) {
    debug.innerText = "on";
} else {
    debug.innerText = "off";
}

for (let i = 0; i < modal.querySelectorAll("#settings-modal a").length; i++) {
    modal.querySelectorAll("#settings-modal a")[i].addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            modal.querySelectorAll("#settings-modal a")[i].click();
        }
    })
}

theme.addEventListener("click", () => {
    if (window.localStorage.getItem("theme") == "dark") {
        theme.innerText = "light";
        window.localStorage.setItem("theme", "light");
        root.style.setProperty("--bg", "whitesmoke");
        root.style.setProperty("--text", "#151515");
    } else {
        theme.innerText = "dark";
        window.localStorage.setItem("theme", "dark");
        root.style.setProperty("--bg", "#151515");
        root.style.setProperty("--text", "whitesmoke");
    }
})

hover.addEventListener("click", () => {
    if (!JSON.parse(window.localStorage.getItem("hover"))) {
        hover.innerText = "on";
        for (let i = 0; i < game.querySelectorAll(".tile").length; i++) {
            game.querySelectorAll(".tile")[i].classList.add("hover");
        }
        window.localStorage.setItem("hover", "true");
    } else {
        hover.innerText = "off";
        for (let i = 0; i < game.querySelectorAll(".tile").length; i++) {
            game.querySelectorAll(".tile")[i].classList.remove("hover");
        }
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

border.addEventListener("blur", () => {
    if (border.value < 0) {
        border.value = 0;
    }

    if (border.value > 10) {
        border.value = 10;
    }

    window.localStorage.setItem("border", border.value);
    root.style.setProperty("--border", border.value+"px");
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

debug.addEventListener("click", () => {
    if (!JSON.parse(window.localStorage.getItem("debug"))) {
        debug.innerText = "on"
        window.localStorage.setItem("debug", "true");
    } else {
        debug.innerText = "off"
        window.localStorage.setItem("debug", "false");
    }

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