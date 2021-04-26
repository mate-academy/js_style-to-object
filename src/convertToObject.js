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
  const obj = {};
  const semicolon = sourceString.split(';');
  const colon = semicolon.map(i => i.split(':'));
  const delTrim = colon.map(del => {
    return del.map(elem => {
      return elem.trim();
    });
  });
  const delEmptyArrays = delTrim.filter(item => item.length === 2);

  delEmptyArrays.forEach(elem => {
    obj[elem[0]] = elem[1];
  });

  return obj;
}

module.exports = convertToObject;
