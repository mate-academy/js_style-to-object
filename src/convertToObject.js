'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styledObj = sourceString.split(';').map(prop => prop.slice(2).trim())
    .map(prop => {
      return prop.split(':').map(elem => elem.trim());
    })
    .filter(prop => prop.length === 2)
    .map(prop => {
      if (prop[0].startsWith('webkit')) {
        prop[0] = '-' + prop[0];
      }

      return prop;
    })
    .reduce((prev, prop) => {
      prev[prop[0]] = prop[1];

      return prev;
    }, {});

  return styledObj;
}

module.exports = convertToObject;
