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
  const styles = sourceString.split(';');
  const theobj = {};
  const filterStyles = styles.filter(elements => elements.trim());

  filterStyles.forEach(property => {
    const [key, value] = property.split(':');

    theobj[key.trim()] = value.trim();
  });

  return theobj;
}

module.exports = convertToObject;
