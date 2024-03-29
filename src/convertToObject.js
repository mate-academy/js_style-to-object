'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const splitedTab = sourceString.split(';').filter(pom => /\S/.test(pom));
  const doubleSplitedTab = splitedTab.map(el => el.split(':'));

  for(const key in doubleSplitedTab) {
    let property = doubleSplitedTab[key];
    result[property[0].trim()] = property[1].trim();
  }

  return result;
}

module.exports = convertToObject;
