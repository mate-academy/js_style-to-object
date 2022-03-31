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
  const stylesArray = sourceString
    .split(';')
    .filter(style => style.trim().length > 0);

  const styleMap = stylesArray.map(element => {
    const [property, value] = element.split(':');
    const styleProperty = property.trim();
    const styleValue = value.trim();

    return [styleProperty, styleValue];
  });

  const styleObj = styleMap.reduce(
    (obj, [property, value]) => ({
      ...obj,
      [property]: value,
    }),
    {});

  return styleObj;
}

module.exports = convertToObject;
