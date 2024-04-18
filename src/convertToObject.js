'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const styles = sourceString.split(';');

  styles.map((style) => {
    const [propertyStr, ...value] = style.split(':');
    const property = propertyStr.trim();
    const valueFixed = value.join();

    if (property.length > 1) {
      result[property] = valueFixed.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
