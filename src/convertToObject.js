/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const items = sourceString.split(';');

  for (let item of items) {
    item = item.trim();

    if (!item) {
      continue;
    }

    const parts = item.split(':');

    if (parts.length < 2) {
      continue;
    }

    const key = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
