const game = document.getElementById("game");
const layout = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const colours = [
    ["#E63946","#F0F600","#69A2B0","green"],
    ["purple","orange","#000006"],
    ["purple","#080000","#009000"],
    ["#000100","#000011","#200001"],
    ["#130000","#014000","#001500"]
];

const customColours = [
    "#130000","#014000","#001500"
]

var layoutX = 4;
var layoutY = 4;

for (let y = 0; y < layoutY; y++) {
    for (let x = 0; x < layoutX; x++) {
        colours[0][y] = "purple";
        colours[x][0] = "purple";

        colours[1][y] = "orange";
        colours[x][1] = "orange";

        colours[2][y] = "pink";
        colours[x][2] = "pink";

        game.innerHTML += "<div class='tile' style='background-color: "+colours[x][y]+"; grid-row: "+(x+1)+";'>"+x+","+y+"</div>";
    }
}