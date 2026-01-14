/**
 * @param {string} styleString
 *
 * @returns {Object}
 */
function convertToObject(styleString) {
  const result = {};

  if (!styleString) {
    return result;
  }

  const lines = styleString.split(';');

  for (const line of lines) {
    if (line.trim() === '') {
      continue;
    }

    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

// ESTA LINHA É ESSENCIAL PARA O TESTE FUNCIONAR:
module.exports = { convertToObject };
