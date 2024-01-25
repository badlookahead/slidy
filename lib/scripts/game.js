const game = document.getElementById("game");
const layout = [
    [1,2,3,4,],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

const colours = [
    ["#E63946","#F0F600","#69A2B0","green"],
    ["purple","orange","#000006", "yellow"],
    ["purple","#080000","#009000", "pink"],
    ["#000100","#000011","#200001"],
    ["#130000","#014000","#001500"]
];

const customColours = [
    "pink","orange","purple"
]

var layoutX = 4;
var layoutY = 4;

function brightness(hex) {
    // https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black

    var hex = hex.substring(1);      // strip #
    var rgb = parseInt(hex, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >>  8) & 0xff;  // extract green
    var b = (rgb >>  0) & 0xff;  // extract blue

    return 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
}

for (let y = 0; y < layoutY; y++) {
    for (let x = 0; x < layoutX; x++) {
        if (layout[x][y]) {
            if (colours[x][y]) {
                if (brightness(colours[x][y]) > fish("#bright").value) {
                    game.innerHTML += "<div class='tile' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+";'><span class='tile-label light'>"+x+","+y+"</span><h1 class='tile-label light'>"+layout[x][y]+"</h1>"+"</div>";
                } else if (brightness(colours[x][y]) < fish("#bright").value) {
                    game.innerHTML += "<div class='tile' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+";'><span class='tile-label dark'>"+x+","+y+"</span><h1 class='tile-label dark'>"+layout[x][y]+"</h1>"+"</div>";
                }
            } else {
                game.innerHTML += "<div class='tile blank-tile' grid-row: "+(x+1)+";'><span class='tile-label'>"+x+","+y+"</span></div>";
            }   
        }
    }
}

// colours[2][y] = customColours[0];
// colours[x][2] = customColours[0];

// colours[1][y] = customColours[1];
// colours[x][1] = customColours[1];

// colours[0][y] = customColours[2];
// colours[x][0] = customColours[2];

// // colours[0][y] = customColours[layoutY-2];
// // colours[x][0] = customColours[layoutX-2];