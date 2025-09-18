'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(inputString) {
  if (!String(inputString).length) {
    return {};
  }

  const declarationsArray = inputString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '');

  return declarationsArray.reduce((resultObject, declaration) => {
    const [propertyName, ...propertyValueParts] = declaration.split(':');

    if (!propertyValueParts.length) {
      return resultObject;
    }

    const key = propertyName.trim();
    const value = propertyValueParts.join(':').trim();

    if (!key) {
      return resultObject;
    }

    resultObject[key] = value;

    return resultObject;
  }, {});
}

module.exports = convertToObject;
