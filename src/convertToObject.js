'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0);

  const callback = (arr, style) => {
    return {
      ...arr,
      [style.slice(0, style.indexOf(':')).trim()]:
      style.slice(style.indexOf(':') + 1).trim(),
    };
  };

  const result = styles.reduce(callback, {});

  return result;
}

module.exports = convertToObject;
