const btngame = document.querySelector('button')
btngame.addEventListener('click', campoMinato)

function campoMinato(){
    // mi prendo il campo da gioco
    const playground = document.querySelector('.playground')
    // controllo che posso il reset del pulsante di invio
    playground.innerHTML = '';
    // numero quadratini da generare
    const numSquare = 100;

    // mi creo il ciclo per i quadratini
    for(let i = 0; i < numSquare; i++){
        // genero i quadratini
        let square = createSquare (i);
        // appendo i quadratini nel playground
        playground.append(square)
    }
}
    


// funzione per creare i quadratini

function createSquare (squareInd){
    // dove 
    const square = document.createElement('div');
    // aggiungo classe
    square.classList.add('square')
    // aggiungo numero indice
    square.innerHTML = squareInd + 1 ;
    square.addEventListener('click', function(){
        square.classList.add('squarenew')
        square.style.color = 'black'
        console.log(`Quadratino cliccato: ${squareInd + 1}`)
    })
    return square;
}

