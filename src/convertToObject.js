'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let result = {};
  const splitedStyles = sourceString.split(';');
  const styles = splitedStyles.map((style) => style.split(':'));

  result = styles.reduce((acc, [key, value]) => {
    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
