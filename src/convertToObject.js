'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

'use strict';

function convertToObject(stylesString) {
  const stylesObject = {};

  // Розділяємо рядок на окремі рядки за розділювачем ";"
  const styleLines = stylesString.split(';');

  for (let line of styleLines) {
    // Видаляємо зайві пробіли
    line = line.trim();

    if (!line) {
      continue;
    } // Пропускаємо порожні рядки

    const [key, value] = line.split(':');

    if (key && value) {
      // Видаляємо зайві пробіли та додаємо до об'єкта
      stylesObject[key.trim()] = value.trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
