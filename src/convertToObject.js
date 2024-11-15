/**
 * @param {string} stylesString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const result = {};

  // Разделение на ключ-значение
  stylesString.split(';').forEach((line) => {
    // Редактируем строку
    const cleanedLine = line.trim();

    // Пропускаем пробелы
    if (!cleanedLine) {
      return;
    }

    const [property, value] = cleanedLine.split(':').map((part) => part.trim());

    // Проверка на валидность
    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
