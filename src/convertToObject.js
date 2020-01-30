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
  const properties = sourceString
    .replace(/\n+ */g, '')
    .split(';')
    .filter(elem => elem.length > 0);

  return properties.reduce((result, firstElem) => {
    const property = firstElem.split(':').map(elem => elem.trim());

    result[property[0]] = property[1];

    return result;
  }, {});
}

module.exports = convertToObject;
