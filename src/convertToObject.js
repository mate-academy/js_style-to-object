'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};

  const attributes = sourceString.split(';');

  const styles = attributes
    .map(el => {
      const style = el.split(':');

      return style.map(elem => elem.trim());
    })
    .filter(el => el.length > 1);

  styles.forEach(el => {
    return (resultObject[el[0]] = el[1]);
  });

  return resultObject;
}

module.exports = convertToObject;
