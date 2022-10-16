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
  const styles = sourceString.split(';');
  const styleObject = styles.reduce((object, style) => {
    const styleAndValue = style.split(':');
    const styleNameWithoutRetreat = styleAndValue[0].trim();

    if (styleNameWithoutRetreat) {
      const valueWithoutRetreat = styleAndValue[1].trim();

      return {
        ...object,
        [styleNameWithoutRetreat]: valueWithoutRetreat,
      };
    } else {
      return object;
    }
  }, {});

  return styleObject;
}

module.exports = convertToObject;
