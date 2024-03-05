'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const mass1 = sourceString.replace(/\n/g, '').trim().split(';');
  const mass2 = [];

  for (let index = 0; index < mass1.length; index++) {
    const element = mass1[index].trim();

    mass2.push(element);
  }

  const strResalt = [];

  for (let i = 0; i < mass2.length; i++) {
    if (mass2[i] !== '') {
      strResalt.push(mass2[i].split(': '));
    }
  }

  for (let index = 0; index < strResalt.length; index++) {
    strResalt[index][1] = strResalt[index][1].replace(/,/g, ',\n');
  }

  const obj = strResalt.reduce((object, value) => {
    const key = value[0].trim();
    const valueObj = value[1].trim();

    return { ...object, [key]: valueObj };
  }, {});

  return obj;
}

module.exports = convertToObject;
