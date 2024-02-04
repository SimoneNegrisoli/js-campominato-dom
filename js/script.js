// Consegna

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



// BONUS :100::

// Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle. Evitare che si possa cliccare 2 volte sulla stessa cella
// Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

// Le validazioni e i controlli possiamo farli anche in un secondo momento.




campoMinatoGame();

// Funzione principale
function campoMinatoGame() {

    // costanti principali 

    const numBombs = 16;  // numero bombe

    let maxAttempts; // numero massimo tentativi

    let bombs; // variabile per bombe

    let score;

    let gameOver; // fine partita

    const winEl = document.getElementById('win'); // da lanciare a fine partita
    winEl.classList.add('d-none');


    const btngame = document.querySelector('button'); // bottone per fa partire il gioco
    btngame.addEventListener('click', play);

    // Avvio il gioco
    function play() {

        if (!winEl.classList.contains('d-none')) {
            winEl.classList.toggle("d-none");
        }

        const level = document.getElementById('level').value;

        let numSquare = selectLevel(level); //numero di quadratini da generare

        score = 0; // cosi quando inizio il punteggio è sempre zero
        gameOver = false;

        maxAttempts = numSquare - numBombs; // numero massimo di tentativi

        bombs = generateBombs(numSquare); //array per bombe
        const squareWidth = Math.sqrt(numSquare); // numero quadratini per lato
        const playground = document.getElementById('playground'); // mi prendo la griglia di gioco
        playground.innerHTML = ''; // cosi la resetto

        //ciclo per stampare i quadratini
        for (let i = 1; i <= numSquare; i++) {
            let square = drawSquare(i, squareWidth); // genero un quadratino
            playground.append(square); // appendo il quadratino alla griglia
        }
    }
    /**
     * Draw a square
     * @param {any} content
     * @param {Number} squareWidth
     * @returns {Object} created square
     * Mette a disposizione una funzione al click drawClick
     */
    function drawSquare(content, squareWidth) {

        const square = document.createElement("div");
        square.classList.add('square');
        square.style.width = `calc(100% / ${squareWidth})`;
        square.style.height = `calc(100% / ${squareWidth})`;
        square.style.color = 'white'
        square.innerHTML = content;
        square.addEventListener("click", drawClick,);  //{ once: true }
        return square;
    }

    /**
     * Eventlistener funcion on square
     * @returns {void}
     */
    function drawClick() {
        if (!this) return;
        this.removeEventListener('click', drawClick);
        // console.log(bombs);
        // console.log(this.textContent)   
        if (bombs.includes(parseInt(this.textContent))) {
            this.classList.add("death");
            this.style.color = "black";
            this.innerHTML = '<i class="fa-solid fa-bomb fa-beat"></i>';
            gameOver = true;
        } else {
            this.classList.add("squarenew");
            this.style.color = "black";
            //console.log(this.textContent);
        }
        setMessage();
    }

    /**
     * Select game level
     * @param {String} level 
     * @returns {Number} number of square
     */
    function selectLevel(level) {
        let numSquare;
        switch (level) {
            case "medio":
                numSquare = 81;
                break;
            case "difficile":
                numSquare = 49;
                break;
            default:
                numSquare = 100;
        }
        return numSquare;
    }

    function generateBombs(numSquare) {
        //creo array che conterrà le bombe
        const bombsArray = [];
        while (bombsArray.length < numBombs) {
            let bomb = getRndInteg(1, numSquare);
            //console.log(bomb);
            if (!bombsArray.includes(bomb)) {
                bombsArray.push(bomb);
            }
        }
        bombsArray.sort(function (a, b) {
            return a - b;
        });

        console.log(bombsArray);
        return bombsArray;

    }

    /**
     * Is Game over
     * 
     * @param {Boolean} loose 
     * @returns 
     */
    function setMessage() {
        let message;
        if (!gameOver) {
            score++;
            if (score < maxAttempts) {
                document.getElementById('score').innerHTML = `Il tuo punteggio è: ${score}`;
                return;
            } else {
                message = `
                <h2>Hai vinto</h2> 
                <h5>Ottimo lavoro soldato <br> <i class="fa-solid fa-award me-1"></i> <i class="fa-solid fa-award me-1"></i> <i class="fa-solid fa-award"></i> </h5>
                <p> Il tuo punteggio è: ${score}</p>
            `;
            }
        } else {
            message = `
            <h2> Hai perso  <i class="fa-solid fa-skull-crossbones fa-beat-fade"></i> </h2
            <p> Il tuo punteggio è: ${score}</p>
        `;
        }
        onGameOver(message);

    }

    /**
     * Game Over
     * @param {string} message 
     */
    function onGameOver(message) {
        const arraySquare = document.getElementsByClassName('square');
        for (let i = 0; i < arraySquare.length; i++) {
            let el = arraySquare[i];
            el.removeEventListener('click', drawClick);
            if (bombs.includes(parseInt(el.textContent))) {
                el.classList.add("death");
                el.style.color = "black";
                el.innerHTML = '<i class="fa-solid fa-bomb fa-beat"></i>';
            }
        }

        winEl.classList.toggle("d-none");
        winEl.innerHTML = message;
    }

}