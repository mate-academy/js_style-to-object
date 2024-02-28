/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};

  const keysAndValues = sourceString.split(";");

  keysAndValues.forEach((keyAndValue) => {
    const [key, value] = keyAndValue.split(":");

    if (key && value) {
      convertedObject[key.trim()] = value.trim();
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
