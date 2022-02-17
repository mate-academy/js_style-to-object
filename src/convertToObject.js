'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.split(';');
  const splitedList = stylesList.map(
    style => style.split(':').map(prop => prop.trim()
    )
  );

  const filteredList = splitedList.filter(item => item.length >= 2);
  const allStylesMap = filteredList.reduce((cssStyles, [key, value]) => ({
    ...cssStyles,
    [key]: value,
  }), {});

  return allStylesMap;
}

module.exports = convertToObject;
