'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let styles = sourceString.split(';');
  const regex = /[\w-.!#]+/g;
  let property = [];
  const stylesObject = {};

  styles = styles.filter(x => x.includes(':'));

  for (let i = 0; i < styles.length; i++) {
    property = styles[i].match(regex);

    if (property.length > 2) {
      stylesObject[property[0]] = property.slice(1).join(' ');
    } else {
      stylesObject[property[0]] = property[1];
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
