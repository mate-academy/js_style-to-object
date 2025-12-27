/**
 * @param {string} styles
 * @returns {Object}
 */
function convertToObject(styles) {
  const result = {};

  // Перевірка на порожній рядок або відсутність аргументу
  if (!styles || !styles.trim()) {
    return result;
  }

  // 1. Розділяємо рядок на частини за крапкою з комою
  const parts = styles.split(';');

  for (const part of parts) {
    // 2. Розділяємо кожну частину на ключ і значення за першою двокрапкою
    const [key, ...valueParts] = part.split(':');

    if (key && valueParts.length > 0) {
      const trimmedKey = key.trim();
      const trimmedValue = valueParts.join(':').trim();

      // Додаємо в об'єкт, якщо ключ не порожній
      if (trimmedKey) {
        result[trimmedKey] = trimmedValue;
      }
    }
  }

  return result;
}

// ВАЖЛИВО: Використовуємо module.exports, бо тести використовують require
module.exports = convertToObject;
