'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sccObj = {};
  const sourceArr = sourceString.split(';');

  sourceArr.pop();

  sourceArr.forEach(el => {
    const properties = el.split(':');

    if (properties[1]) {
      sccObj[properties[0].trim()] = properties[1].trim();
    }
  });

  return sccObj;
}

module.exports = convertToObject;
