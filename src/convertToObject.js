'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  return styles.reduce((prev, element) => {
    if (element.trim() !== '') {
      const [key, value] = element.split(':');

      return {
        ...prev,
        [key.trim()]: value.trim(),
      };
    }

    return { ...prev };
  }, {});
}

module.exports = convertToObject;
