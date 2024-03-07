const app = document.getElementById('app');
let currentpoints = 50; 
let maxpoints = 100;
let battlemessage = 'Wallah Bror'
let gridLengthX = 9;
let gridLengthY = 7;
let gridArray = [];
let gametimer;
let goatTimer;
let listTimer;
let friendlyGoatY = 0;
let friendlyGoatX = 0;
let zombieGoatY = 0;
let zombieGoatX = 0;
let playerGoatX = Math.floor(gridLengthX/2);
let playerGoatY = gridLengthY-1;
let tickRate = 200;
let randomnum = 0
let canMove = false;
let state = true;

//bilder
const playerImg = "<img src='img/player.png'>";
const goatImg = "<img src='img/g0at.png'>";
const zombieGoatImg = "<img src='img/g0mbie.png'>";
const kompisGoatImg = "<img src='img/g-0at.png'>";
const femaleGoatImg = "<img src='img/gh0at.png'>";
