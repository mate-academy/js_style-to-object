'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const keysValues = styles
    .filter((item) => item.trim() !== '')
    .map((item) => item.split(':'));

  return keysValues.reduce((obj, [key, value]) => {
    if (key && value) {
      obj[key.trim()] = value.trim();
    }

    return obj;
  }, {});
}

module.exports = convertToObject;
