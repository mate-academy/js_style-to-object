'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // const obj = {};
  const properties = sourceString.split(';');

  // for (let i = 0; i < properties.length; i++) {
  //   const [key, value] = properties[i].split(':');

  //   if (!value) {
  //     continue;
  //   }
  //   obj[key.trim()] = value.trim();
  // }

  const obj = properties.reduce((prev, item) => {
    const [key, value] = item.split(':').map(x => x.trim());

    if (value) {
      prev[key] = value;
    }

    return prev;
  }, {});

  return obj;
}

module.exports = convertToObject;
