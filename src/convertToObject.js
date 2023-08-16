'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
const propertySeparator = ';';
const keySeparator = ':';

function convertToObject(sourceString) {
  const properties = sourceString
    .split(propertySeparator)
    // .map(prop => prop.trim().split(keySeparator))
    // .filter(prop => prop[0] !== '');
    .reduce((acc, prop) => {
      const line = prop.trim().split(keySeparator);

      if (line[0] !== '') {
        acc.push(line);
      }

      return acc;
    }, []);

  const styleList = properties.reduce((acc, prop) => {
    return Object.assign(acc, { [prop[0].trim()]: prop[1].trim() });
  }, {});

  return styleList;
}

module.exports = convertToObject;
