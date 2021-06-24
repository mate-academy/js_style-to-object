'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';')
    .filter(style => !style.split('').every(ch => ch === ' '));
  const convertedStyle = styles.reduce((prev, style) => {
    const styleParts = style.split(':');
    const currentConvertedStyle = (styleParts[0] === undefined)
      || (styleParts[1] === undefined)
      ? {
        ...prev,
      }
      : {
        ...prev,
        [styleParts[0].trim()]: styleParts[1].trim(),
      };

    return currentConvertedStyle;
  },
  {});

  return convertedStyle;
}

module.exports = convertToObject;
