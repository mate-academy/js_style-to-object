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
  const styles = {};
  const styleArr = sourceString.split(';');
  styleArr.pop();

  styleArr.forEach(item => {
    const separateStyle = item.split(':');
    styles[separateStyle[0].trim()] = separateStyle[1].trim();
  });

  return styles;
}

module.exports = convertToObject;
