/*eslint-disable*/
"use strict";

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedString = sourceString.split(";");

  const divide = splitedString.map((prop) => {
    const dividedArr = prop.trim().split(":");

    return dividedArr.map((prop) => prop.trim()).filter((prop) => prop !== "");
  });

  const styledObj = divide
    .filter((prop) => prop.length > 0)
    .reduce((prev, item) => {
      return { ...prev, [item[0]]: item[1] };
    }, {});

  return styledObj;
}

module.exports = convertToObject;
