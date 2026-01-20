'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if(sourceString.length === 0) {
    return {};
  }

 let styleProperties = {};
 let declarations = sourceString.split(';');

  declarations.forEach(declaration => {

    const parts = declaration.split(':');

    if(parts.length === 2) {

      styleProperties[parts[0].trim()] = parts[1].trim();

    }
  })

  return styleProperties;
}
module.exports = convertToObject;


// let newSplittedArray.forEach((el) => el.split(';'))
//declarations.forEach(declaration => {
  // 1. Podziel 'declaration' za pomocą ':'
  // 2. Sprawdź, czy po podziale masz 2 elementy
  // 3. Jeśli tak, wyczyść je (trim) i dodaj do 'styles'
//});