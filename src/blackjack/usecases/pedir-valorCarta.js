/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} retorna la carta del deck
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

/**
 * Obtener valor de la carta
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */
// pedirCarta();
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}