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
  const properties = {};
  const splited = sourceString
    .split('\n')
    .map(property => property.trim())
    .filter(property => property !== '' && property !== ';')
    .map(property => property
      .split(':')
      .map(part => part
        .split(' ')
        .filter(element => element !== '')
        .join(' ')
        .split('')
        .filter(char => char !== ';')
        .join('')
      )
    );

  splited.forEach(part => {
    properties[part[0]] = part[1].trim();
  });

  return properties;
}

module.exports = convertToObject;
