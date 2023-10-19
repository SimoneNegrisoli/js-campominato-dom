// Consegna

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS :100::
// Aggiungere una `select` accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:  difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe; diifficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe; - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle. Evitare che si possa cliccare 2 volte sulla stessa cella
// Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
// Consigli del giorno:** :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei `console.log()` per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.






campoMinatoGame();

function campoMinatoGame() {
    const btngame = document.querySelector('button');
    btngame.addEventListener('click', campoMinato);

    function campoMinato() {
        const level = document.getElementById('level').value;
        const numSquare = selectLevel(level);

        const playground = document.querySelector('.playground');
        playground.innerHTML = '';

        for (let i = 0; i < numSquare; i++) {
            const square = createSquare(i, numSquare);
            playground.appendChild(square);
        }

        // mi ritorno bombs
        const bombs = generateBombs(numSquare);
        console.log(bombs)


        // funzione per bombe
        function generateBombs (numSquare){
            // arrray vuoto
            const bombs = [];

            // ciclo while per farne una
            while (bombs.length < 16){
                const bomb = getRndInteg(1, numSquare);

                if (!bombs.includes.bomb){
                    bombs.push(bomb)
                }
            }

            return bombs;
        }






    }

    function createSquare(squareInd, numSquare) {
        const squareWidth = Math.sqrt(numSquare);
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = squareInd + 1;
        square.style.width = `calc(100% / ${squareWidth})`;
        square.style.height = square.style.width;

        square.addEventListener('click', function () {
            square.classList.add('squarenew');
            square.style.color = 'black';
            console.log(`Quadratino cliccato: ${squareInd + 1}`);
        });

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