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

function brightness(hex) {
    // https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black

    var hex = hex.substring(1); // strip #
    var rgb = parseInt(hex, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >>  8) & 0xff; // extract green
    var b = (rgb >>  0) & 0xff; // extract blue

    return 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
}

function drawGame() {
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

            if (((layout[y][x]/layoutX)+"").split(".").length > 1) {
                if (((layout[y][x]/layoutX)+"").split(".")[1].length > 1) {
                    if (colours[(((layout[y][x]/layoutX)+"").split(".")[1]/100*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1] != undefined) {
                        if (brightness(colours[(((layout[y][x]/layoutX)+"").split(".")[1]/100*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]) >= fish("#bright").value) {
                            if (fish("#debug").innerText == "on") {
                                game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(((layout[y][x]/layoutX)+"").split(".")[1]/100*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label light'>"+y+","+x+"</span><h1 class='tile-label light'>"+layout[y][x]+"</h1></div>";
                            } else {
                                game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(((layout[y][x]/layoutX)+"").split(".")[1]/100*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label light hidden'>"+y+","+x+"</span><h1 class='tile-label light'>"+layout[y][x]+"</h1></div>";
                            }
                        } else if (brightness(colours[(((layout[y][x]/layoutX)+"").split(".")[1]/100*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]) <= fish("#bright").value) {
                            if (fish("#debug").innerText == "on") {
                                game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(((layout[y][x]/layoutX)+"").split(".")[1]/100*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label dark'>"+y+","+x+"</span><h1 class='tile-label dark'>"+layout[y][x]+"</h1></div>";
                            } else {
                                game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(((layout[y][x]/layoutX)+"").split(".")[1]/100*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label dark hidden'>"+y+","+x+"</span><h1 class='tile-label dark'>"+layout[y][x]+"</h1></div>";
                            }
                        }
                    } else {
                        if (fish("#debug").innerText == "on") {
                            game.innerHTML += "<div class='tile blank-tile' style='grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label'>"+y+","+x+"</span><h1 class='tile-label'>"+layout[y][x]+"</h1></div>";
                        } else {
                            game.innerHTML += "<div class='tile blank-tile' style='grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label hidden'>"+y+","+x+"</span><h1 class='tile-label hidden'>"+layout[y][x]+"</h1></div>";
                        }
                    }
                } else {
                    if (colours[(((layout[y][x]/layoutX)+"").split(".")[1]/10*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1] != undefined) {
                        if (brightness(colours[(((layout[y][x]/layoutX)+"").split(".")[1]/10*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]) >= fish("#bright").value) {
                            if (fish("#debug").innerText == "on") {
                                game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(((layout[y][x]/layoutX)+"").split(".")[1]/10*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label light'>"+y+","+x+"</span><h1 class='tile-label light'>"+layout[y][x]+"</h1></div>";
                            } else {
                                game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(((layout[y][x]/layoutX)+"").split(".")[1]/10*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label light hidden'>"+y+","+x+"</span><h1 class='tile-label light'>"+layout[y][x]+"</h1></div>";
                            }
                        } else if (brightness(colours[(((layout[y][x]/layoutX)+"").split(".")[1]/10*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]) <= fish("#bright").value) {
                            if (fish("#debug").innerText == "on") {
                                game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(((layout[y][x]/layoutX)+"").split(".")[1]/10*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label dark'>"+y+","+x+"</span><h1 class='tile-label dark'>"+layout[y][x]+"</h1></div>";
                            } else {
                                game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(((layout[y][x]/layoutX)+"").split(".")[1]/10*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label dark hidden'>"+y+","+x+"</span><h1 class='tile-label dark'>"+layout[y][x]+"</h1></div>";
                            }
                        }
                    } else {
                        if (fish("#debug").innerText == "on") {
                            game.innerHTML += "<div class='tile blank-tile' style='grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label'>"+y+","+x+"</span><h1 class='tile-label'>"+layout[y][x]+"</h1></div>";
                        } else {
                            game.innerHTML += "<div class='tile blank-tile' style='grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label hidden'>"+y+","+x+"</span><h1 class='tile-label hidden'>"+layout[y][x]+"</h1></div>";
                        }
                    }
                }
            } else {
                if (colours[(1*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1] != undefined) {
                    if (brightness(colours[(1*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]) >= fish("#bright").value) {
                        if (fish("#debug").innerText == "on") {
                            game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(1*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label light'>"+y+","+x+"</span><h1 class='tile-label light'>"+layout[y][x]+"</h1></div>";
                        } else {
                            game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(1*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label light hidden'>"+y+","+x+"</span><h1 class='tile-label light'>"+layout[y][x]+"</h1></div>";
                        }
                    } else if (brightness(colours[(1*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]) <= fish("#bright").value) {
                        if (fish("#debug").innerText == "on") {
                            game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(1*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label dark'>"+y+","+x+"</span><h1 class='tile-label dark'>"+layout[y][x]+"</h1></div>";
                        } else {
                            game.innerHTML += "<div class='tile' tabindex='0' style='background-color: "+colours[(1*layoutX)-1][Math.ceil(layout[y][x]/layoutX)-1]+"; grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label dark hidden'>"+y+","+x+"</span><h1 class='tile-label dark'>"+layout[y][x]+"</h1></div>";
                        }
                    }
                } else {
                    if (fish("#debug").innerText == "on") {
                        game.innerHTML += "<div class='tile blank-tile' style='grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label'>"+y+","+x+"</span><h1 class='tile-label'>"+layout[y][x]+"</h1></div>";
                    } else {
                        game.innerHTML += "<div class='tile blank-tile' style='grid-row: "+(y+1)+"; grid-column: "+(x+1)+";'><span class='tile-label hidden'>"+y+","+x+"</span><h1 class='tile-label hidden'>"+layout[y][x]+"</h1></div>";
                    }
                }
            }
        }
    }

    for (let i = 0; i < game.querySelectorAll(".tile").length; i++) {
        game.querySelectorAll(".tile")[i].style.width = game.clientWidth / layoutX + "px";
        game.querySelectorAll(".tile")[i].style.height = game.clientHeight / layoutY + "px";
    
        game.querySelectorAll(".tile")[i].addEventListener("keypress", (e) => {
            if (e.key == "Enter") {
                game.querySelectorAll(".tile")[i].click();
            }
        })
    
        game.querySelectorAll(".tile:not(blank-tile)")[i].addEventListener("click", (e) => {
            slide(e.target.querySelectorAll("h1.tile-label")[0].innerText,e.target.style.gridRow-1,e.target.style.gridColumn-1);
        })
    
        if (JSON.parse(window.localStorage.getItem("hover"))) {
            game.querySelectorAll(".tile")[i].classList.add("hover");
        } else {
            game.querySelectorAll(".tile")[i].classList.remove("hover");
        }
    }
}

drawGame();

function slide(tile,x,y) {
    let blankTile = fish(".blank-tile");
    let blankTileLabel = fish(".blank-tile h1.tile-label");
    let blankCol = blankTile.style.gridColumn;
    let blankRow = blankTile.style.gridRow;

    if (layout[blankRow-2] != undefined && tile == layout[blankRow-2][blankCol-1]) {
        i = layout[x][y];
        layout[x][y] = layout[blankRow-1][blankCol-1];
        layout[blankRow-1][blankCol-1] = i;

        drawGame();
    } else if (layout[blankRow-1] != undefined && tile == layout[blankRow-1][blankCol]) {
        layout[x][y] = layout[blankRow-1][blankCol-1];
        i = layout[x][y];
        layout[x][y] = layout[blankRow-1][blankCol-1];
        layout[blankRow-1][blankCol-1] = i;

        drawGame();
    } else if (layout[blankRow-1] != undefined && tile == layout[blankRow-1][blankCol-2]) {
        i = layout[x][y];
        layout[x][y] = layout[blankRow-1][blankCol-1];
        layout[blankRow-1][blankCol-1] = i;

        drawGame();
    } else if (layout[blankRow] != undefined && tile == layout[blankRow][blankCol-1]) {
        i = layout[x][y];
        layout[x][y] = layout[blankRow-1][blankCol-1];
        layout[blankRow-1][blankCol-1] = i;

        drawGame();
    }
}