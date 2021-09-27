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
  const stylesArray = sourceString.split(';\n');
  const stylesObject = {};

  const filteredArray = stylesArray.map(item => {
    const set = new Set(item.split(':'));

    set.delete('\n');
    set.delete('');

    return [...set].map(value => value.trim());
  });

  filteredArray.forEach(item => {
    if (item.length > 1) {
      stylesObject[item[0]] = item[1];
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
