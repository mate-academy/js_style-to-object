'use strict';

/**

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';')
    .map(item => item.split(':'))
    .map(item => item.map(word => word
      .replace('\n', '').trim()))
    .filter(item => item.every(word => word.length > 0));
  const stylesInObj = Object.fromEntries(styles);

  return stylesInObj;
}

module.exports = convertToObject;
