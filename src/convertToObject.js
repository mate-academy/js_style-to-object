/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objStyles = {};

  let arrStyles = [];

  arrStyles = ((sourceString.split(';')).map(x =>
    x.trim())).filter(x => x !== '');

  for (const y of arrStyles) {
    const arr = y.split(':');

    objStyles[array[0].trim()] = arr[1].trim();
  }

  return objStyles;
}

module.exports = convertToObject;
