'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const splitByCommand = sourceString.split(';');
  const arrayOfCommands = [];

  splitByCommand.forEach(element => {
    arrayOfCommands.push(element.split(':').map(x => x.trim()));
  });

  const noEmptyElem = arrayOfCommands.filter(element => element.length > 1);
  const resultObject = Object.fromEntries(noEmptyElem);

  return resultObject;
};

module.exports = convertToObject;
