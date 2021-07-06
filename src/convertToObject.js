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
  const styles = sourceString.replace(/\n/g, '')
    .split(';')
    .map(element => element.trim())
    .filter(element => element.length > 0);

  const callback = (stylesResult, part) => {
    stylesResult[part[0].trim()] = part[1].trim();

    return stylesResult;
  };

  return styles.map(style => style.split(':')).reduce(callback, {});
}

module.exports = convertToObject;
