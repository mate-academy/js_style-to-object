'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertArr = sourceString.replace(/\n/g, '').split(';');
  const newObject = {};

  convertArr.forEach((arrItem) => {
    const [key, value] = arrItem.split(':').map((element) => element.trim());
    const valueCheck = value ? value.includes(',') : false;

    if (key && !valueCheck) {
      newObject[key] = value;
    }

    if (valueCheck) {
      const newValue = value.split(',').map((element, index, elements) => {
        if (index !== elements.length - 1) {
          return element + ',';
        }

        return element;
      });

      newObject[key] = newValue.join('\n');
    }
  });

  return newObject;
}

module.exports = convertToObject;
