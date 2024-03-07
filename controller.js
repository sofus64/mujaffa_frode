

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        if (canMove) {

            switch (event.key) {
                case "ArrowLeft":
                    if (playerGoatX > 0) {
                        playerGoatX -= 1
                        
                    }
                    break;
                case "ArrowRight":
                    if (playerGoatX < gridLengthX-1) {
                        playerGoatX += 1
                        
                    }
                    break;
            }
        }
    }
})

function gameendscreen() {
    if (currentpoints >= maxpoints) {
        battlemessage = 'Du vant!'
        clearInterval(gametimer)
    }
    if (currentpoints <= 0) {
        battlemessage = 'Du tapte!'
        clearInterval(gametimer)
    }
}

function genkompis() {
    clearInterval(gametimer)
    random = Math.floor(Math.random() * 2)
    battlemessage = 'Wallah bror. Fet BMW!'
    kompis = /*HTML*/`
    <div style="position: fixed; right: 15%; bottom: 35%">${random ? kompisGoatImg : femaleGoatImg}</div>
    <div style="display: flex; gap: 20px; position: fixed; right: 10%; bottom: 45%">
    <div onclick="checkhei(1)" style="color: orange">Wallah bror</div>
    <div onclick="checkhei(2)" style="color: orange">Halla</div>
    <div onclick="checkhei(3)" style="color: orange">Sup</div>
    </div>
    `
    canMove = false
    return kompis
}


function checkhei(hva) {
    random = Math.ceil(Math.random() * 3)
    if (hva == random) {
        battlemessage = 'Du valgte riktig. +20!'
        currentpoints += 20
        updateView()
    } else {
        battlemessage = 'Du valgte feil. -5!'
        currentpoints -= 5
        updateView()
    }
    canMove = true
    gametimer = setInterval(function (){
        createList()
        updateView()
    }, tickRate)
}


