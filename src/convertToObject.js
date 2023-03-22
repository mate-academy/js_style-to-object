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
  const withoutSideSpaces = sourceString.trim();
  const withoutNewLines = withoutSideSpaces
    .split('\n')
    .join(' ')
    .split(';');

  const withoutEmptyStrings = withoutNewLines
    .filter(elem => elem && elem.length > 5)
    .map(elem => elem.trim());

  const finalFormatting = withoutEmptyStrings
    .map(elem => elem.split(':')
      .map(subElem => subElem.trim()));

  const formattedObj = finalFormatting.reduce((acc, elem) => {
    acc[elem[0]] = elem[1];

    // Please, check another solution under this function
    // and write if it is better

    return acc;
  }, {});

  return formattedObj;
}

// I have another solution of the task, is it better than main?

// return sourceString
// .trim()
// .split('\n')
// .join(' ')
// .split(';')
// .filter(elem => elem && elem.length > 5)
// .map(elem => elem.trim())
// .map(elem => elem.split(':')
// .map(elem => elem.trim()))
// .reduce((acc, elem) => {
//   acc[elem[0]] = elem[1];
//   return acc;
// }, {})

module.exports = convertToObject;
