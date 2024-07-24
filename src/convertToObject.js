'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arraySorceString = sourceString
    .split(';')
    .map((string) => string.trim().split(':'));

  const filteredSorceString = arraySorceString
    .filter((innerArr) => innerArr.length === 2)
    .map((element) => element.map((item) => item.trim()));

  // console.log(filteredSorceString);

  const convertingObject = filteredSorceString.reduce((acc, arrayElement) => {
    const [key, value] = arrayElement;

    acc[key] = value;

    return acc;
  }, {});

  return convertingObject;
  // console.log(convertingObject);
}

module.exports = convertToObject;
