'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringsWithProperty = sourceString.split(';');
  const trimStrings = stringsWithProperty.map(prop => prop.trim());
  const filterStrings = trimStrings.filter((prop) => prop !== '');
  const styles = filterStrings.map(prop =>
    prop.split(':').map(value => value.trim()));

  return styles.reduce((prev, prop) => {
    return {
      ...prev,
      [prop[0]]: prop[1],
    };
  }, {});
}

module.exports = convertToObject;
