'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const styleObject = {};

  // Поділ  рядків крапками з комою
  const declarations = styles.split(';');

  declarations.forEach((declaration) => {
    // Розділ кожну декларацію двокрапкою
    const [property, ...values] = declaration.split(':');

    // Перевірте на існ  власт, так і значн, і видал зайві пробіли
    if (property && values.length > 0) {
      styleObject[property.trim()] = values.join(':').trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
