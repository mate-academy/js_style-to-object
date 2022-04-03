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
  const properties = sourceString
    .split('\n')
    .filter((line) => line.includes(':'));

  const divideProp = (item) => {
    let items = item.split(':');

    const preparationProp = (part) => {
      if (part.includes(';')) {
        return part.slice(0, -1).trim();
      }

      return part.trim();
    };

    items = items.map(preparationProp);

    return {
      [items[0]]: items[1],
    };
  };

  const resultAraay = properties.map(divideProp);

  return resultAraay.reduce((pre, item) => (
    {
      ...pre,
      ...item,
    }), {});
}

module.exports = convertToObject;
