'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // remove whitespaces by means of RegExp
  const trimmedStr = sourceString.replace(/\s+/g, ' ').trimLeft();
  // array without extra spaces
  const arrOfStyles = trimmedStr.split(';');

  // a number of arrays which will be used later on
  const arrOfArrays = [];
  const newArr = [];
  let resArr = [];

  // object which will be filled-in by keys & values
  const ObjectOfStyles = {};

  // try to get rid of extra whitespaces & push items to a new array
  for (let i = 0; i < arrOfStyles.length; i++) {
    if (arrOfStyles[i] !== ' ') {
      newArr.push(arrOfStyles[i]);
    }
  }

  /* create arr of arrays which are divided by ':',
  after this I can create an object with add keys & values */
  for (const item of newArr) {
    resArr = item.trim().split(':');
    arrOfArrays.push(resArr);
  }

  // dont know why trim() method doesnt work here!!!
  for (let i = 0; i < arrOfArrays.length; i++) {
    const value = arrOfArrays[i][1];

    ObjectOfStyles[arrOfArrays[i][0]] = value;
  }

  // that is why I`ve made a new arr
  const arrayOfKeyPairs = Object.entries(ObjectOfStyles);
  const finalResult = {};

  /* and here trim() works fine and key&value pairs added
  to the obj without any unnecessary whitespaces */
  for (let i = 0; i < arrayOfKeyPairs.length; i++) {
    finalResult[arrayOfKeyPairs[i][0].trim()] = arrayOfKeyPairs[i][1].trim();
  }

  return finalResult;
}

module.exports = convertToObject;
