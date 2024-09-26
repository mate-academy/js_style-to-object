'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let result = sourceString.match(/[-!@#$%^&*(),.;?":{}|<>\w]+/g)
    .join(' ')
    .split(';');

  result = result.map(each => each.split(':'))
    .filter(item => item.length > 1)
    .map(item => item.map(x => x.trim()));

  const resultObj = {};

  result.forEach(word => {
    resultObj[word[0]] = word[1];
  }
  );

  return resultObj;
}

module.exports = convertToObject;
