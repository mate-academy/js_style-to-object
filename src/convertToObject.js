'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';').map(item =>
    item.trim()).filter(Boolean);

  return styles.reduce((acc, element) => {
    const [key, value] = element.split(':').map(item =>
      item.trim());

    return {
      ...acc,
      [key]: value,
    };
  }, {});
}

module.exports = convertToObject;
