'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';').filter(el => el.includes(':'));

  const result = styles.reduce((obj, property) => {
    const propValue = property.trim().split(':');

    obj[propValue[0].trim()] = propValue[1].trim();

    return obj;
  }, {});

  return result;
}

module.exports = convertToObject;
