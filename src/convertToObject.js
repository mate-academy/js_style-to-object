'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectArray = sourceString.split(';').map(formatProperties);

  function formatProperties(property) {
    const splittedProp = property.split(':');
    const [key, value] = splittedProp;

    if (key.length === 0 || value === undefined) {
      return {};
    }

    return { [key.trim()]: value.trim() };
  }

  const object = objectArray.reduce(
    (obj, item) => Object.assign(obj, item),
    {},
  );

  // console.log(object);
  return object;
}

module.exports = convertToObject;
