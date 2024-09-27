'use strict';

/**
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
