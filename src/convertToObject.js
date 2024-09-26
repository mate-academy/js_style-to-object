'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};
  const styles = sourceString.split(';');

  for (const style of styles) {
    const [property, value] = style.split(':');

    if (property && value) {
      object[property.trim()] = value.trim();
    }
  }

  return object;
}

module.exports = convertToObject;
