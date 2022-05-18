'use strict';
//  * @param {string} sourceString
//  *
//  * @return {object}

function convertToObject(sourceString) {
  const resultArr = sourceString.split(';')
    .map(x => x.split(':').map(y => y.trim()));

  const obj = {};

  resultArr.forEach(element => {
    const [key, value] = element;

    if (value) {
      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
