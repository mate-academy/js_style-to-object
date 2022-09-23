'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayWirhStyles = sourceString.split(';');
  const arrayWithDeleteEmptiness = arrayWirhStyles.filter(x => {
    return x.trim().length > 0;
  });

  const callback = (prev, curentItem) => {
    const endOfindex = curentItem.indexOf(':');
    const keys = curentItem.slice(0, endOfindex);
    const values = curentItem.slice(endOfindex + 1);

    return {
      ...prev,
      [keys.trim()]: values.trim(),
    };
  };

  const objectWithSryles = arrayWithDeleteEmptiness.reduce(callback, {});

  return objectWithSryles;
}

module.exports = convertToObject;
