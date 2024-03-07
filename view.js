createList();
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
    ${gengrid()} 
    ${genpoints()}  
    ${startgamebutton()}
    ${randomnum == 5 ? genkompis() : ''}
    ${battlemessaging()}
    `;
    collisionCheck();
}

function genpoints() {
    points = /*HTML*/ `

    <div style="position: fixed; top: 10%; right: 2%">
    <div class="points">Kulhetspoeng: ${currentpoints} / ${maxpoints}</div>
    <div style="display:flex; justify-content: left">
    <div style="flex: 0 0 auto; background-color: green; width: ${(currentpoints / maxpoints) * 300}px; 
    height: 40px"></div>
    <div style="flex: 0 0 auto; background-color: red; width: ${((maxpoints - currentpoints) / maxpoints) * 300}px; 
    height: 40px"></div>
</div>
</div>
`;
    return points;
}

function gengrid() {
    // document.getElementById('grid').style.gridTemplateColumns = "repeat(" + gridLengthX + ", 1fr)";
    updateGoats();
    updatePlayer();
    randomnum = Math.ceil(Math.random () * 10)
    gameendscreen();
    let gridsystem = '';

    for (let y = 0; y < gridLengthY; y++) {
        for (let x = 0; x < gridLengthX; x++) {
            gridsystem += /*HTML*/`
            <div id='x${x}y${y}'>${gridArray[y][x].image}</div>
            `
        }
    }
    gridHTML = `<div id="grid" style="display: grid; grid-auto-rows: 1fr; grid-template-columns: repeat(` + gridLengthX + ` , 1fr);">` + gridsystem + `</div>`;
    return gridHTML;
}

function updateGoats() {;
    createList();
    createFriendlyGoat();
    createZombieGoat();
}

function battlemessaging() {
    message = /*HTML*/`
    <div style="position: fixed; bottom: 25%; right: 2%; width: 300px; height: 40px; background-color: orange; text-align: center">${battlemessage}</div>`
    return message
}

//document.getElementById("myDIV").style.grid = "250px / auto auto";

function startgamebutton() {
    startbutton = /*HTML*/`
    <button class="startButton" onclick="startgame()">Start game</button>
    `
    return startbutton;
}

function createFriendlyGoat() {
    if (friendlyGoatY >= gridLengthY) {
        friendlyGoatX = Math.floor(Math.random() * gridLengthX)
        friendlyGoatY = 0;
    } else if (zombieGoatY >= gridLengthY) {friendlyGoatY = 0;}
    gridArray[friendlyGoatY][friendlyGoatX].image = goatImg;
    friendlyGoatY += 1;
    
}

function createZombieGoat() {
    if (zombieGoatY >= gridLengthY) {

        zombieGoatX = Math.floor(Math.random() * gridLengthX)
        while (zombieGoatX == friendlyGoatX) {
            zombieGoatX = Math.floor(Math.random() * gridLengthX)
        }
        zombieGoatY = 0;
    } else if (zombieGoatY >= gridLengthY) {zombieGoatY = 0;}
    gridArray[zombieGoatY][zombieGoatX].image = zombieGoatImg;
    zombieGoatY += 1;
}

function startgame() {
    if (state) {
    gametimer = setInterval(function (){
        updateView()
    }, tickRate)
    canMove = true;
    state = false;
}
}


function createList() {
    gridArray = [];
    for (let y = 0; y < gridLengthY; y++) {
        gridArray[y] = []
        for (let x = 0; x < gridLengthX; x++) {
            gridArray[y][x] = { type: "blank", image: "" }
        }
    }
}

function collisionCheck() {
    if (friendlyGoatX == playerGoatX && friendlyGoatY == playerGoatY) {
        currentpoints -= 5;
        battlemessage = 'Du traff en friendly geit! -5'
    } else if (zombieGoatX == playerGoatX && zombieGoatY == playerGoatY) {
        currentpoints += 5;
        battlemessage = 'Du traff en zombie geit! +5'
    }
}

function updatePlayer() {
    gridArray[playerGoatY][playerGoatX].image = playerImg;
}

