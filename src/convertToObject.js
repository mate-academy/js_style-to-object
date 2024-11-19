'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const divisionOfValues = sourceString.split(';');
  const valuesFormated = divisionOfValues.map((value) => {
    return value.split(':').map((objectProperty) => objectProperty.trim());
  });

  return valuesFormated.reduce((accum, keyValue) => {
    const [key, value] = keyValue;

    return { ...accum, [key]: value };
  }, {});
}

module.exports = convertToObject;
