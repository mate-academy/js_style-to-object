'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const propsArr = sourceString.split(';');

  for (let props of propsArr) {
    props = props.trim();

    if (!props) {
      continue;
    }

    const [property, value] = props.split(':');

    if (!value) {
      continue;
    }

    result[property.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
