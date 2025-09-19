const STARTING_POKER_CHIPS = 100;
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;

let player1Point = STARTING_POKER_CHIPS;
let player2Point = STARTING_POKER_CHIPS;
let player3Point = STARTING_POKER_CHIPS;

player1Point -= 50;
player2Point -= 25;
player3Point += 75;

let p1Name = "ASDF";
let p2Name = "no";
let p3Name = "yes";

console.log(`Welcome! 챔피언십 타이틀은 ${p1Name},  ${p2Name}, ${p3Name} 선수는  ${STARTING_POKER_CHIPS} 경기가 될 중 한 명에게 주어집니다. 각 의 칩을 가지고 시작합니다. 것입니다. 최고의 선수가 승리하길 바랍니다!`);

let hasEnded = false;
hasEnded = ((player1Point + player2Point == 0) || (player2Point + player3Point == 0) || (player1Point + player3Point == 0));
console.log("game has ended: ", hasEnded);



let square1 = square(5);
let square2 = square();
console.log(square1);
console.log(square2);

function square(n=4) {
    return n * n;
}

function displayDone() {
    console.log("3 seconds elapsed.");
}
setTimeout(3000, displayDone);

console.log("next");
