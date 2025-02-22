'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  if (!sourceString) {
    return object;
  }

  const styles = sourceString.split(';');

  styles.forEach((style) => {
    if (!style.includes(':')) {
      return;
    }

    let [property, value] = style.split(':');

    if (property && value) {
      property = property.trim();
      value = value.trim();
    }

    object[property] = value;
  });

  return object;
}

module.exports = convertToObject;
