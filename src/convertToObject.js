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
  const cssOnly = {};

  sourceString.split(';').map(item => {
    const [key, value] = item.split(':').map(word => word.trim());

    if (key && value) {
      return (cssOnly[key] = value);
    }
  });

  return cssOnly;
}

module.exports = convertToObject;
