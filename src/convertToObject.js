'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString.split(';');
  const ret = {};

  styles.forEach((element) => {
    const childArr = element.split(':');

    if (childArr.length === 2) {
      const attributeName = childArr[0].trim();
      const attributeText = childArr[1].trim();

      if (attributeName !== '') {
        ret[attributeName] = attributeText;
      }
    }
  });

  return ret;
}

module.exports = convertToObject;
