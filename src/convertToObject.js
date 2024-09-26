'use strict';
/* eslint-disable */ 
/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resObject = {};
  const arrProperties = sourceString.split(';');

  for (const property of arrProperties) {
    const proprContainer = property.split(':');

    const [key, value] = proprContainer;

    if (key.trim().length && value.trim().length) {
      resObject[key.trim()] = value.trim();
    }
  }

  return (resObject);
}

module.exports = convertToObject;
