'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const mass1 = sourceString.split(';');

  mass1.forEach((element, index) => {
    mass1[index] = element.replace(/\n|\t/g, ' ').trim().split(':');
  });

  mass1.forEach((element, index) => {
    for (let i = 0; i < element.length; i++) {
      mass1[index][i] = element[i].trim().replace(/, /g, ',\n');
    }
  });

  const objStyle = mass1.reduce((object, value) => {
    return { ...object, [value[0]]: value[1] };
  }, {});

  return objStyle;
}

module.exports = convertToObject;
