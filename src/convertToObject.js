'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const propObj = {};

  let propArr = sourceString.split(';');

  propArr = propArr.filter(prop => prop.includes(':'));

  propArr.forEach(prop => {
    const propSplited = prop.split(':');

    propObj[propSplited[0].trim()] = propSplited[1].trim();
  });

  return propObj;
}

module.exports = convertToObject;
