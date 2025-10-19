'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  // const StylesObject = {};
  // const items = sourceString.split(';');

  // for (let item of items) {
  //   item = item.trim();

  //   if (!item) {
  //     continue;
  //   }

  //   if (!item.includes(':')) {
  //     continue;
  //   }

  //   const [property, ...valueParts] = item.split(':');

  //   const key = property.trim();
  //   const value = valueParts.join(':').trim();

  //   StylesObject[key] = value;
  // }


  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.includes(':'))
    .map((item) => {
      const [property, ...valueParts] = item.split(':');

      return [property.trim(), valueParts.join(':').trim()];
    })
    .reduce((stylesObject, [key, value]) => {
      stylesObject[key] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
