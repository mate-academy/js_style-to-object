'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';').filter((elem) => elem.length !== 0);
  const sourceObj = {};

  sourceArr.forEach((element) => {
    const [propety, value] = element.split(':').map((name) => name.trim());

    sourceObj[propety] = value;
  });

  return sourceObj;
}

module.exports = convertToObject;
