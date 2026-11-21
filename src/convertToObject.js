'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleProperties = {};

  const styles = sourceString.split(';');

  const keyAndValue = styles.map((key) => key.split(':'));

  const validPairs = keyAndValue.filter((style) => style.length === 2);

  validPairs.forEach(([key, value]) => {
    styleProperties[key.trim()] = value.trim();
  });

  return styleProperties;
}

module.exports = convertToObject;
