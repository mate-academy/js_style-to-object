'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';').filter((style) => style.trim() !== '');

  const pairs = styles.map((style) => style.split(':'));

  const cleanPairs = pairs.map((pair) => {
    return [pair[0].trim(), pair[1].trim()];
  });

  return cleanPairs.reduce((stylesObject, pair) => {
    stylesObject[pair[0]] = pair[1];

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
