'use strict';
//* @param {string} sourceString
// *
//* @return {object}
//

function convertToObject(sourceString) {
  const objectStyle = {};
  const stringArr = sourceString.split(';');

  for (const key of stringArr) {
    if (key.includes(':')) {
      const [name, value] = key.split(':');

      objectStyle[name.trim()] = value.trim();
    }
  }

  return objectStyle;
}

module.exports = convertToObject;
