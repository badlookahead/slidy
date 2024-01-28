function fish(e) {
    return document.querySelector(e);
}

// https://gist.github.com/w3core/e3d9b5b6d69a3ba8671cc84714cca8a4?permalink_comment_id=3125287#gistcomment-3125287
// function brightness(color) {
//     var color = "" + color, isHEX = color.indexOf("#") == 0, isRGB = color.indexOf("rgb") == 0;

//     if (isHEX) {
//         const hasFullSpec = color.length == 7;
//         var m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
//         if (m) var r = parseInt(m[0] + (hasFullSpec ? '' : m[0]), 16), g = parseInt(m[1] + (hasFullSpec ? '' : m[1]), 16), b = parseInt(m[2] + (hasFullSpec ? '' : m[2]), 16);
//     }

//     if (isRGB) {
//         var m = color.match(/(\d+){3}/g);
//         console.log(m)
//         if (m) var r = m[0], g = m[1], b = m[2];
//     }
//     if (typeof r != "undefined") return ((r*299)+(g*587)+(b*114))/1000;
// }

function brightness(color) {
    var color = "" + color, isHEX = color.indexOf("#") == 0, isRGB = color.indexOf("rgb") == 0;
    if (isHEX) {
        var m = color.substr(1).match(color.length == 7 ? /(\S{2})/g : /(\S{1})/g);
        if (m) var r = parseInt(m[0], 16), g = parseInt(m[1], 16), b = parseInt(m[2], 16);
    }

    if (isRGB) {
        var m = JSON.parse("["+color.slice(4,color.length-1)+"]");
        if (m) var r = parseInt(m[0]), g = parseInt(m[1]), b = parseInt(m[2]);
    }

    if (typeof r != "undefined") return ((r*299)+(g*587)+(b*114))/1000;
  }