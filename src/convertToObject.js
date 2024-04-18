'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const IS_A_LETTER = /[a-z]/i;
  const styles = sourceString
    .split(';')
    .filter((style) => style.search(IS_A_LETTER) !== -1)
    .map((style) => {
      const param = style.split(':').map((val) => val.trim());
      const [key, value] = param;

      return { [key]: value };
    })
    .reduce(
      (accumulator, currentObj) => ({ ...accumulator, ...currentObj }),
      {},
    );

  return styles;
}

module.exports = convertToObject;
