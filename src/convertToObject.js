'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // make an array with strings of sourceString
  const properties = [];

  let temp = sourceString.trim() + ';';

  while (temp.includes(';')) {
    properties.push(temp.slice(0, temp.indexOf(';') + 1));
    temp = temp.slice(temp.indexOf(';') + 1).trim();
  }

  // make an object with properties
  const propObj = {};

  properties.forEach((str) => {
    const prop = str.slice(0, str.indexOf(':')).trim();

    const index = str.indexOf(';');

    let val;

    if (index !== -1) {
      val = str.slice(str.indexOf(':') + 1, str.indexOf(';')).trim();
    } else {
      val = str.slice(str.indexOf(':') + 1).trim();
    }

    if (prop.length !== 0 && val.length !== 0) {
      propObj[prop] = val;
    }
  });

  return propObj;
}

module.exports = convertToObject;
