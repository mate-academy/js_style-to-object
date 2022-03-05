'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 *  related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const masive = sourceString.split(':');
  const masiveNoSpace = masive.map(x => x.trim());
  const masiveJoin = masiveNoSpace.join(':');
  const masiveResult = masiveJoin.split(';');
  const result = masiveResult.filter(masiv => masiv.trim() !== '');
  const callback = (prev, x) => {
    return {
      ...prev,
      [x[0]]: x[1],
    };
  };

  return result.map(masiv => masiv.trim().split(':')).reduce(callback, {});
}

module.exports = convertToObject;
