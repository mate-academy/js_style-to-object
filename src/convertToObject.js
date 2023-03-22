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
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter(style => style.length > 1 && style.includes(':'));

  return styles.reduce((objectCss, property) => {
    const [key, value] = property.split(':');

    objectCss[key.trim()] = value.trim();

    return objectCss;
  }, {});
}

module.exports = convertToObject;
