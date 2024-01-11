

/*

var userValue = prompt('table number');

document.getElementById('Welcome').innerHTML = (` <br>

${userValue} x 1 = ${userValue * 1}<br>
${userValue} x 2 = ${userValue * 2}<br>
${userValue} x 3 = ${userValue * 3}<br>
${userValue} x 4 = ${userValue * 4}<br>
${userValue} x 5 = ${userValue * 5}<br>
${userValue} x 6 = ${userValue * 6}<br>
${userValue} x 7 = ${userValue * 7}<br>
${userValue} x 8 = ${userValue * 8}<br>
${userValue} x 9 = ${userValue * 9}<br>
${userValue} x 10 = ${userValue * 10}<br>

`)


CHAPTER #13

logicaal operators (>, <AbortController, ===, !===, &&)
1.Logical operatorsor
2.Falsyvalues (false, 0, "", null)
3.Truthy values (true, any number greater than 0, any string that is not empty)
4.If statement nested

*/


var jug = "water";
var juicePowder = "Tang";

//! Chapter 13
if (jug === "water" && juicePowder === "Tang") {
    console.log(jug + juicePowder)
} else {
    console.log(' Tang id is not available in juicepowder')
}

//! Chapter 14

if (jug === "water"){
    if (jug === "water" && juicePowder === "Tang") {
        console.log(jug + juicePowder)
    } else {
        console.log(' Tang id is not available in juicepowder')
    }
} else {
    console.log("Water is not available in jug")
}



