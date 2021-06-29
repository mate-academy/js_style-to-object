'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultOfDivision = {};
  const elementForDivision = sourceString.split(':').map(x => x.trim())
    .join(': ').split(';').map(y => y.trim()).filter(x => x.length > 1);

  elementForDivision.forEach((k, i) => {
    const indexColons = elementForDivision[i].indexOf(':');

    resultOfDivision[elementForDivision[i].slice(0, indexColons)]
    = elementForDivision[i].slice(indexColons + 2,
        elementForDivision[i].length);
  });

  return resultOfDivision;
}

module.exports = convertToObject;
