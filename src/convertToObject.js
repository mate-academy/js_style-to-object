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
  const stylesList = sourceString.trim().split(/;\n*\s*/g);
  stylesList.pop();
  const obj = {};
  for (const keyAndValue of stylesList) {
    const [key, value] = keyAndValue.split(/\s*:\s*/);
    obj[key] = value;
  }
  return obj;
}

module.exports = convertToObject;
