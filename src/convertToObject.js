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
  const cssProperties = {};
  const styles = sourceString.split(';')
    .map(i => i.split(':').map(j => j.trim()));

  for (let i = 0; i < styles.length; i++) {
    const [key, value] = styles[i];

    if (key.length > 0) {
      cssProperties[key] = value;
    }
  }

  return cssProperties;
}

module.exports = convertToObject;
