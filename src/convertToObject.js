'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objects = sourceString.split(';');

  return objects.reduce((resultObject, object) => {
    const [key, value] = object.split(':').map((item) => item.trim());

    resultObject[key] = value;

    return resultObject;
  }, {});
}

module.exports = convertToObject;
