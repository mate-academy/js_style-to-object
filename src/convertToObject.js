'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length)
    .map((rule) => {
      const [property, ...valueParts] = rule.split(':');

      return {
        property: property.trim(),
        value: valueParts.join(':').trim(),
      };
    })
    .filter(({ property, value }) => property && value)

    .reduce(
      (stylesObject, { property, value }) => ({
        ...stylesObject,
        [property]: value,
      }),
      {},
    );
}

module.exports = convertToObject;
