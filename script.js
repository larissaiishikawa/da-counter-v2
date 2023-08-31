var score1 = 0;
var score2 = 0;

function scorep1() {
    score1++;
    document.getElementById("button1").textContent = `${score1}`;
}

function scorep2() {
    score2++;
    document.getElementById("button2").textContent = `${score2}`;
}