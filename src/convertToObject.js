'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  let str = [];

  if (sourceString.length === 0) {
    return obj;
  }

  str = sourceString.split(';');

  for (let i = 0; i < str.length; i++) {
    const newstr = str[i].trim();

    if (newstr.length < 2) {
      continue;
    }

    const colonpos = newstr.search(':');
    const property = newstr.substr(0, colonpos).trim();
    const value = newstr.substr(colonpos + 1).trim();

    obj[property] = value;
    /* obj.property = value */
  }

  return obj;
}

module.exports = convertToObject;
