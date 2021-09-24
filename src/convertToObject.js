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
    const splittedItem = item.split(':');
    const set = new Set(splittedItem);

    set.delete('\n');
    set.delete('');

    const res = [...set].map(value => value.trim());

    return res.join(':');
  });

  filteredArray.forEach(item => {
    if (item.length > 0) {
      const splitted = item.split(':');

      stylesObject[splitted[0]] = splitted[1];
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
