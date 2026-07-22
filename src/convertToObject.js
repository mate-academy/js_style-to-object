'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '');
  let cssObject = {};

  cssObject = styles.reduce((obj, item) => {
    const [value, property] = item.split(':').map((str) => str.trim());

    obj[value] = property;

    return obj;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
