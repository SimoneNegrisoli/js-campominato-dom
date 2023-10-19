// Consegna

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



// BONUS :100::

// Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle. Evitare che si possa cliccare 2 volte sulla stessa cella
// Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

// Le validazioni e i controlli possiamo farli anche in un secondo momento.






campoMinatoGame();

function campoMinatoGame() {
    const btngame = document.querySelector('button');
    btngame.addEventListener('click', campoMinato);

    function campoMinato() {
        const level = document.getElementById('level').value;
        const numSquare = selectLevel(level);

        let score = 0;
        

        const playground = document.querySelector('.playground');
        playground.innerHTML = '';

        // mi ritorno bombs
        const bombs = generateBombs(numSquare);

        // funzione per bombe
        function generateBombs(numSquare) {
            // arrray vuoto
            const bombs = [];

            // ciclo while per farne una
            while (bombs.length < 16) {
                const bomb = getRndInteg(1, numSquare);

                if (!bombs.includes(bomb)) {
                    bombs.push(bomb)
                }
            }
            return bombs;
        }


        for (let i = 0; i < numSquare; i++) {
            const square = createSquare(i, numSquare, bombs,score);
            playground.appendChild(square);
        }

        console.log(bombs)

    }

    function createSquare(squareInd, numSquare, bombs,score) {
        let play = true;

        const squareWidth = Math.sqrt(numSquare);
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = squareInd + 1;
        square.style.width = `calc(100% / ${squareWidth})`;
        square.style.height = square.style.width;


        square.addEventListener('click', function () {
            let msg;
            if(!play) {
                return;
            }

            if (bombs.includes(squareInd + 1)) {
                square.classList.add('death')
                square.innerHTML = '<i class="fa-solid fa-bomb fa-beat" style="color: #000000;"></i>';
                play = false;
                msg = `Hai perso: Il tuo punteggio è ${score}`
            } else {
                square.classList.add('squarenew')
                square.style.color = 'black';
                score++
                if (score === (numSquare - 16)){
                    msg = `Hai vinto facendo il punteggio massimo`
                    play = false;
                }else{
                    msg = `Il tuo punteggio attuale è: ${score}`
                }
            }
            document.getElementById('score').innerHTML = msg;

        })
        return square;
    }

    function selectLevel(level) {
        let numSquare;
        switch (level) {
            case 'medio':
                numSquare = 81;
                break;
            case 'difficile':
                numSquare = 49;
                break;
            default:
                numSquare = 100;
        }
        return numSquare;
    }


}
