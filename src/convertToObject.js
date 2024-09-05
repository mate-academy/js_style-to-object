'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter((style) => style.trim() !== '')
    .map((style) => style.split(':'));

  return styles.reduce((prevStyles, [property, value]) => {
    return { ...prevStyles, [property.trim()]: value.trim() };
  }, {});
}

module.exports = convertToObject;
