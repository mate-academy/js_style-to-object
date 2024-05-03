'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((item) => {
    const declarations = item
      .split(':')
      .map((declaration) => deleteBreak(declaration));

    if ((declarations[0], declarations[1])) {
      const key = declarations[0];
      const value = declarations[1];

      result[key] = value;
    }
  });

  function deleteBreak(item) {
    let start = 0;
    let end = 0;
    const condition = 'abcdefghijklmnoprstuvwxyz0123456789-#%()';

    for (let i = 0; i < item.length; i++) {
      if (condition.includes(item[i].toLowerCase())) {
        start = i;
        break;
      }
    }

    for (let i = item.length - 1; i >= 0; i--) {
      if (condition.includes(item[i].toLowerCase())) {
        end = i + 1;
        break;
      }
    }

    return item.slice(start, end);
  }

  return result;
}
module.exports = convertToObject;
