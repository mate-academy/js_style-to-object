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
  // write your code here

  let array = sourceString.split(';');

  if (array.length === 0) {
    return {};
  }

  // let's remove unnecesary signs here (clearing array)
  array = array.map((key) => {
    return key.replace(/\n/g, '').trim();
  }).filter(Boolean);

  // creating key:value pairs in array
  array = array.map((key) => {
    return key.split(':');
  });

  // cleaning inside, this time triming each element
  array = array.map((key) => {
    const fixedKey = key.map((el) => el.trim());

    return fixedKey;
  });

  // console.log(array);

  // creating objct, it's gonna get some keys soon
  const newObject = {
  };

  // aaand each key:value pair from array goes into object
  array.forEach(element => {
    newObject[element[0]] = element[1];
  });

  return newObject;
}

module.exports = convertToObject;
