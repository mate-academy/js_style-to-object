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
  let arrayStyles = sourceString.trim().split('/n').join('').split(';').slice(0, -1);
  let obj = {};
  arrayStyles.forEach(function(item) {
    let prop = item.trim().split(': ');
    obj[prop[0]] = prop[1];
  }
  );
  return obj;
}

module.exports = convertToObject;
