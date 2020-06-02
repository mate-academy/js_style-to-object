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
  const getStyles = (styles, item) => {
    if (item.includes(':')) {
      const [key, value] = item.replace(/\n/g, '').split(':');

      styles[key.trim()] = value.trim();
    }

    return styles;
  };

  return sourceString.split(';').reduce(getStyles, {});
}

module.exports = convertToObject;
