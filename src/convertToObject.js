'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const styleArray = sourceString.split(';'); // Розділяємо рядок на ключ значен

  styleArray.forEach((styleItem) => {
    const trimmedStyle = styleItem.trim();

    if (trimmedStyle.length > 0) {
      // якщо стиль не порожній
      const [property, value] = trimmedStyle.split(':');
      // розділяємо стиль значення : ;
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();
      //  додаємо властивість та значення до об'єкту стилів

      stylesObject[trimmedProperty] = trimmedValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
