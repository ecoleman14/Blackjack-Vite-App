import _ from 'underscore';

// 
/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposCarta 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

 export const crearDeck = (tiposCarta, tiposEspeciales) => {

   if(!tiposCarta || tiposCarta.length === 0) 
   throw new Error('tiposCarta es obligatorio');

   if(!tiposEspeciales || tiposEspeciales.length === 0) 
   throw new Error('TiposEspeciales es obligatorio');
    
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

//export default crearDeck;