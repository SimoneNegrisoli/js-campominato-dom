/* FUNCTION UTILITY */

/**
 * [getRndInteg]
 * Genera un numero intero random
 * @param {Number} min il primo numero
 * @param {Number} max il secondo numero
 * @returns {Number} il numero randomico generato * 
 */
function getRndInteg (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * [isEven]
 * Determina se il numero è pari
 * @param {Number} num 
 * @returns {Boolean} ritorna se è vera o falsa
 */
function isEven (num){
   
return (num % 2 === 0) ? true : false; 
}