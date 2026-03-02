'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let newStyleString = {};
  const pairs = [];
  const eachWord = sourceString.split(/[;:]/).map((el) => el.trim());

  const temp = eachWord.filter((el) => el !== '');

  temp.forEach((v, i) => {
    if (i % 2 === 0) {
      pairs.push([v, temp[i + 1]]);
    }
  });

  newStyleString = pairs.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return newStyleString;
}

module.exports = convertToObject;
