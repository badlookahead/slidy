const game = document.getElementById("game");

var layoutX = 4;
var layoutY = 4;

layout = [];
let i3 = 1;
for (let i = 0; i < layoutY; i++) {
    layout[i] = [];
    for (let i2 = 0; i2 < layoutX; i2++) {
        layout[i][i2] = i3;
        i3 += 1;
    }
}

// const colours = [
//     ["#E63946","#F0F600","#69A2B0","ffff33"],
//     ["#666888","#ffa500","#000006", "#ffff00"],
//     ["#666888","#080000","#009000", "#ff9999"],
//     ["#000100","#000011","#200001"],
//     ["#130000","#014000","#001500"]
// ];

colours = [];
for (let i = 0; i < layoutY; i++) {
    colours[i] = [];
    for (let i2 = 0; i2 < layoutX; i2++) {
        colours[i][i2] = "#cceedd";
    }
}
colours[colours[0].length-1][colours.length-1] = undefined;

const customColours = [
    "#ff4444","#44ff44","#4444ff","#151515"
]

root.style.setProperty("--tile-font", 2.8125 * (game.clientHeight / layoutY) + "%")

function setupGame() {
    game.innerHTML = "";

    for (let y = 0; y < layoutY; y++) {
        for (let x = 0; x < layoutX; x++) {
            if (customColours.length > 0) {
                let i2 = customColours.length;
                for (let i = customColours.length-1; i > -1; i--) {
                    i2 -= 1;

                    if (colours[i2][y] != undefined) {
                        colours[i2][y] = customColours[i];
                    }

                    if (colours[x][i2] != undefined) {
                        colours[x][i2] = customColours[i];
                    }
                }
            }

            if (layout[x][y]) {
                if (colours[x][y]) {
                    if (brightness(colours[x][y]) >= fish("#bright").value) {
                        if (fish("#hover").innerText == "on") {
                            if (fish("#debug").innerText == "on") {
                                game.innerHTML += "<div class='tile hover' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+"; grid-column: "+(y+1)+";'><span class='tile-label light'>"+x+","+y+"</span><h1 class='tile-label light'>"+layout[x][y]+"</h1>"+"</div>";
                            } else {
                                game.innerHTML += "<div class='tile hover' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+"; grid-column: "+(y+1)+";'><span class='tile-label light hidden'>"+x+","+y+"</span><h1 class='tile-label light'>"+layout[x][y]+"</h1>"+"</div>";
                            }
                        } else {
                            if (fish("#debug").innerText == "on") {
                                game.innerHTML += "<div class='tile' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+"; grid-column: "+(y+1)+";'><span class='tile-label light'>"+x+","+y+"</span><h1 class='tile-label light'>"+layout[x][y]+"</h1>"+"</div>";
                            } else {
                                game.innerHTML += "<div class='tile' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+"; grid-column: "+(y+1)+";'><span class='tile-label light hidden'>"+x+","+y+"</span><h1 class='tile-label light'>"+layout[x][y]+"</h1>"+"</div>";
                            }
                        }
                    } else if (brightness(colours[x][y]) <= fish("#bright").value) {
                        if (fish("#hover").innerText == "on") {
                            if (fish("#debug").innerText == "on") {
                                game.innerHTML += "<div class='tile hover' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+"; grid-column: "+(y+1)+";'><span class='tile-label dark'>"+x+","+y+"</span><h1 class='tile-label dark'>"+layout[x][y]+"</h1>"+"</div>";
                            } else {
                                game.innerHTML += "<div class='tile hover' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+"; grid-column: "+(y+1)+";'><span class='tile-label dark hidden'>"+x+","+y+"</span><h1 class='tile-label dark'>"+layout[x][y]+"</h1>"+"</div>";
                            }
                        } else {
                            if (fish("#debug").innerText == "on") {
                                game.innerHTML += "<div class='tile' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+"; grid-column: "+(y+1)+";'><span class='tile-label dark'>"+x+","+y+"</span><h1 class='tile-label dark'>"+layout[x][y]+"</h1>"+"</div>";
                            } else {
                                game.innerHTML += "<div class='tile' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+"; grid-column: "+(y+1)+";'><span class='tile-label dark hidden'>"+x+","+y+"</span><h1 class='tile-label dark'>"+layout[x][y]+"</h1>"+"</div>";
                            }
                        }
                        
                    }
                } else {
                    if (fish("#debug").innerText == "on") {
                        game.innerHTML += "<div class='tile blank-tile' style='grid-row: "+(x+1)+"; grid-column: "+(y+1)+";'><span class='tile-label'>"+x+","+y+"</span><h1 class='tile-label'>"+layout[x][y]+"</h1>"+"</div>";
                    } else {
                        game.innerHTML += "<div class='tile blank-tile' style='grid-row: "+(x+1)+"; grid-column: "+(y+1)+";'><span class='tile-label hidden'>"+x+","+y+"</span><h1 class='tile-label hidden'>"+layout[x][y]+"</h1>"+"</div>";
                    }
                }   
            }
        }
    }

    for (let i = 0; i < game.querySelectorAll(".tile").length; i++) {
        game.querySelectorAll(".tile")[i].style.width = game.clientWidth / layoutX + "px";
        game.querySelectorAll(".tile")[i].style.height = game.clientHeight / layoutY + "px";
    }
    
    for (let i = 0; i < game.querySelectorAll(".tile:not(.blank-tile)").length; i++) {
        game.querySelectorAll(".tile:not(.blank-tile)")[i].addEventListener("keypress", (e) => {
            if (e.key == "Enter") {
                game.querySelectorAll(".tile")[i].click();
            }
        })
    
        game.querySelectorAll(".tile:not(.blank-tile)")[i].addEventListener("click", (e) => {
            slide(e.target,e.target.querySelectorAll("h1.tile-label")[0],e.target.querySelectorAll("span.tile-label")[0]);
        })
    }
}

function drawGame() {
    for (let i = 0; i < game.querySelectorAll(".tile").length; i++) {
        game.querySelectorAll(".tile")[i].style.width = game.clientWidth / layoutX + "px";
        game.querySelectorAll(".tile")[i].style.height = game.clientHeight / layoutY + "px";
    }
    
    for (let i = 0; i < game.querySelectorAll(".tile:not(.blank-tile)").length; i++) {
        if (JSON.parse(window.localStorage.getItem("hover"))) {
            game.querySelectorAll(".tile:not(.blank-tile)")[i].classList.add("hover");
        } else {
            game.querySelectorAll(".tile:not(.blank-tile)")[i].classList.remove("hover");
        }

        if (brightness(game.querySelectorAll(".tile:not(.blank-tile)")[i].style.backgroundColor) >= fish("#bright").value) {
            game.querySelectorAll(".tile:not(.blank-tile)")[i].querySelector("h1.tile-label").classList.remove("dark");
            game.querySelectorAll(".tile:not(.blank-tile)")[i].querySelector("h1.tile-label").classList.add("light");
            game.querySelectorAll(".tile:not(.blank-tile)")[i].querySelector("span.tile-label").classList.remove("dark");
            game.querySelectorAll(".tile:not(.blank-tile)")[i].querySelector("span.tile-label").classList.add("light");
        } else if (brightness(game.querySelectorAll(".tile:not(.blank-tile)")[i].style.backgroundColor) <= fish("#bright").value) {
            game.querySelectorAll(".tile:not(.blank-tile)")[i].querySelector("h1.tile-label").classList.remove("light");
            game.querySelectorAll(".tile:not(.blank-tile)")[i].querySelector("h1.tile-label").classList.add("dark");
            game.querySelectorAll(".tile:not(.blank-tile)")[i].querySelector("span.tile-label").classList.remove("light");
            game.querySelectorAll(".tile:not(.blank-tile)")[i].querySelector("span.tile-label").classList.add("dark");
        }
    }

    for (let i = 0; i < game.querySelectorAll("span.tile-label").length; i++) {
        if (JSON.parse(window.localStorage.getItem("debug"))) {
            game.querySelectorAll("span.tile-label")[i].classList.remove("hidden");
        } else {
            game.querySelectorAll("span.tile-label")[i].classList.add("hidden");
        }
    }

    if (JSON.parse(window.localStorage.getItem("debug"))) {
        game.querySelectorAll(".tile.blank-tile h1.tile-label")[0].classList.remove("hidden");
        game.querySelectorAll(".tile.blank-tile span.tile-label")[0].classList.remove("hidden");
    } else {
        game.querySelectorAll(".tile.blank-tile h1.tile-label")[0].classList.add("hidden");
        game.querySelectorAll(".tile.blank-tile span.tile-label")[0].classList.add("hidden");
    }
}

setupGame();

function winCheck() {
    let i = 1;
    for (let y = 0; y < layoutY; y++) {
        for (let x = 0; x < layoutX; x++) {
            if (layout[y][x] != i) {
                return false;
            }

            i += 1;
        }
    }

    return true;
}

let winModal = document.getElementById("win-modal");

function slide(tile,tileLabel,tilePosLabel) {
    let blankTile = fish(".blank-tile");
    let blankTileLabel = fish(".blank-tile h1.tile-label");
    let blankTilePosLabel = fish(".blank-tile span.tile-label");
    let blankCol = blankTile.style.gridColumn;
    let blankRow = blankTile.style.gridRow;

    if (layout[blankRow-2] != undefined && tileLabel.innerText == layout[blankRow-2][blankCol-1]) {
        // UP
        let i = layout[tile.style.gridRow-1][tile.style.gridColumn-1];
        layout[tile.style.gridRow-1][tile.style.gridColumn-1] = layout[tile.style.gridRow][tile.style.gridColumn-1];
        layout[tile.style.gridRow][tile.style.gridColumn-1] = i;

        tile.style.gridRow = JSON.parse(tile.style.gridRow) + 1;
        tilePosLabel.innerText = (tile.style.gridRow - 1)+","+(tile.style.gridColumn - 1);

        blankTile.style.gridRow = JSON.parse(blankRow) - 1;
        if (blankTilePosLabel) {
            blankTilePosLabel.innerText = (blankTile.style.gridRow - 1)+","+(blankTile.style.gridColumn - 1);
        }
    } else if (layout[blankRow-1] != undefined && tileLabel.innerText == layout[blankRow-1][blankCol]) {
        // RIGHT
        let i = layout[tile.style.gridRow-1][tile.style.gridColumn-1];
        layout[tile.style.gridRow-1][tile.style.gridColumn-1] = layout[tile.style.gridRow-1][tile.style.gridColumn-2];
        layout[tile.style.gridRow-1][tile.style.gridColumn-2] = i;

        tile.style.gridColumn = JSON.parse(tile.style.gridColumn) - 1;
        tilePosLabel.innerText = (tile.style.gridRow - 1)+","+(tile.style.gridColumn - 1);

        blankTile.style.gridColumn = JSON.parse(blankCol) + 1;
        if (blankTilePosLabel) {
            blankTilePosLabel.innerText = (blankTile.style.gridRow - 1)+","+(blankTile.style.gridColumn - 1);
        }
    } else if (layout[blankRow] != undefined && tileLabel.innerText == layout[blankRow][blankCol-1]) {
        // DOWN
        let i = layout[tile.style.gridRow-1][tile.style.gridColumn-1];
        layout[tile.style.gridRow-1][tile.style.gridColumn-1] = layout[tile.style.gridRow-2][tile.style.gridColumn-1];
        layout[tile.style.gridRow-2][tile.style.gridColumn-1] = i;

        tile.style.gridRow = JSON.parse(tile.style.gridRow) - 1;
        tilePosLabel.innerText = (tile.style.gridRow - 1)+","+(tile.style.gridColumn - 1);

        blankTile.style.gridRow = JSON.parse(blankRow) + 1;
        if (blankTilePosLabel) {
            blankTilePosLabel.innerText = (blankTile.style.gridRow - 1)+","+(blankTile.style.gridColumn - 1);
        }
    } else if (layout[blankRow-1] != undefined && tileLabel.innerText == layout[blankRow-1][blankCol-2]) {
        // LEFT
        let i = layout[tile.style.gridRow-1][tile.style.gridColumn-1];
        layout[tile.style.gridRow-1][tile.style.gridColumn-1] = layout[tile.style.gridRow-1][tile.style.gridColumn];
        layout[tile.style.gridRow-1][tile.style.gridColumn] = i;

        tile.style.gridColumn = JSON.parse(tile.style.gridColumn) + 1;
        tilePosLabel.innerText = (tile.style.gridRow - 1)+","+(tile.style.gridColumn - 1);

        blankTile.style.gridColumn = JSON.parse(blankCol) - 1;
        if (blankTilePosLabel) {
            blankTilePosLabel.innerText = (blankTile.style.gridRow - 1)+","+(blankTile.style.gridColumn - 1);
        }
    }

    if (winCheck()) {
        winModal.showModal();
    }
}

document.getElementById("close-win").addEventListener("click", () => {
    winModal.close();
    winModal.inert = true;
})

document.getElementById("close-win").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        winModal.close();
        winModal.inert = true;
    }
})
