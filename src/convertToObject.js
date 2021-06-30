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
  const elementForDivision = sourceString.split(':').map(item => item.trim())
    .join(': ').split(';').map(style => style.trim())
    .filter(value => value.length > 1);

  elementForDivision.forEach((item, index) => {
    const indexColons = elementForDivision[index].indexOf(':');

    resultOfDivision[elementForDivision[index].slice(0, indexColons)]
    = elementForDivision[index].slice(indexColons + 2,
        elementForDivision[index].length);
  });

  return resultOfDivision;
}

module.exports = convertToObject;
