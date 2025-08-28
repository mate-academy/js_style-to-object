'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    
    .map(declaration => declaration.trim())
    
    .filter(declaration => declaration.length > 0)
    
    .reduce((styleObject, declaration) => {
      const [key, ...valueParts] = declaration.split(':');

      if (key && valueParts.length > 0) {
        styleObject[key.trim()] = valueParts.join(':').trim();
      }

      return styleObject;
    }, {}); 
}

module.exports = convertToObject;
