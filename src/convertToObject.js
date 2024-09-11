'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
<<<<<<< HEAD
  const cleanedSourceString = sourceString.replace(/\t+/g, ' ').trim();
  const styleStrings = cleanedSourceString.split(';');
=======
  const resObj = {};
  const cleanedSourceString = sourceString.replace(/\t+/, ' ').trim();
  const styleStrings = cleanedSourceString.split(';');
  let currentProperty = '';
  let currentValue = '';

  styleStrings.forEach((styleString) => {
    if (styleString.trim() === '') {
      return;
    }

    if (styleString.includes(':')) {
      const index = styleString.indexOf(':');
      const property = styleString.slice(0, index).trim();
      const value = styleString.slice(index + 1).trim();

      if (currentProperty) {
        resObj[currentProperty] = currentValue.trim();
        currentProperty = '';
        currentValue = '';
      }

      currentProperty = property;
      currentValue = value;
    } else if (currentProperty) {
      currentValue += ' ' + styleString.trim();
    }
  });

  if (currentProperty) {
    resObj[currentProperty] = currentValue.trim();
  }

  return resObj;
}
>>>>>>> c0457b2d1942439df26fa6a21b101cc786da65ed

  return styleStrings.reduce((acc, styleString) => {
    if (styleString.trim()) {
      const [property, ...valueParts] = styleString.split(':');
      const value = valueParts.join(':').trim();

      if (property && value) {
        acc[property.trim()] = value;
      }
    }

    return acc;
  }, {});
}
module.exports = convertToObject;
