'use strict';

/**
//  * @param {string} sourceString
//  *
//  * @return {object}
//  */

function convertToObject(sourceString) {
  const splitArray = sourceString.split(';');

  const cleanedArray = splitArray.map((item) => item.replace(';', ''));
  const filteredArray = cleanedArray.filter((item) => item);

  const resultObject = filteredArray.reduce((acc, pair) => {
    const [key, value] = pair.split(':').map((str) => str.trim());

    acc[key] = value;

    return acc;
  }, {});

  return resultObject;
}

module.exports = convertToObject;
