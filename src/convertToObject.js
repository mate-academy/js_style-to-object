'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '');
  const resultObj = {};
  const style = [];

  for (let i = 0; i < styles.length; i++) {
    style.push(styles[i].split(':').map((str) => str.trim()));
  }

  for (let i = 0; i < style.length; i++) {
    resultObj[style[i][0]] = style[i][1];
  }

  return resultObj;
}

module.exports = convertToObject;
