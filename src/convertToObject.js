'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Here I create stylesArray(splitStyles) / Создаю массив

  const styles = sourceString.split(';');
  const splitStyles = styles.map(style => style.trim());

  // here I crate stylesObject by reduce splitStyles array
  // Создаю обьект на основе массива splitStyles

  const stylesObject = splitStyles.reduce((acc, style) => {
    const [property, value] = style.split(':').map(part => part.trim());

    // here I checked that property & value is exist
    // Проверяю что бы property & value существовали

    if (property && value) {
      acc[property] = value;
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
