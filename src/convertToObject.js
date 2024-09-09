'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const styleLines = sourceString.split(';').filter(line => line.trim());

  styleLines.forEach(styleLine => {
    const [property, value] = styleLine.split(':').map(part => part.trim());

    if(property, value){
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
