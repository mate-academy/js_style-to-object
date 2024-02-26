'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const RULE_SEPARATOR = ';';
  const PROPERTY_SEPARATOR = ':';
  const rules = sourceString.split(RULE_SEPARATOR);

  return rules.reduce((object, rule) => {
    const [ propertyName, value ] = rule
      .split(PROPERTY_SEPARATOR)
      .map((rulePart) => rulePart.trim());

    if (propertyName.length && value.length) {
      object[propertyName] = value;
    }

    return object;
  }, {});
}

module.exports = convertToObject;
