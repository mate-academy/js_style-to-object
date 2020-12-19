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
  const result = {};
  const ofSArr = sourceString.split(';');
  const opArray = ofSArr.map(x => x.trim().split(':').map(y => y.trim()));
  const filteredArray = opArray.filter(el => el.length > 1);

  function callback(el) {
    result[el[0]] = el[1];
  }

  filteredArray.forEach(callback);

  return result;
}

module.exports = convertToObject;
