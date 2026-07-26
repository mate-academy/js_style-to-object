'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedStyles = sourceString.split(';');
  const styles = splitedStyles.map((style) => style.split(':'));

  const stylesObject = styles.reduce((acc, [key, value]) => {
    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
