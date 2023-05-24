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
  const stylesWithoutLineBreaks = sourceString.replace(/\n/gi, '');

  const styleArray = stylesWithoutLineBreaks.split(';');

  const styleProperties = styleArray.map(element => element.split(':')
    .map(item => item.trim())
  );

  const stylesFiltered = styleProperties.filter(item => item.length > 1);

  const styles = stylesFiltered.reduce((prev, [key, value]) =>
    ({
      ...prev,
      [key]: value,
    }), {}
  );

  return styles;
}

module.exports = convertToObject;
