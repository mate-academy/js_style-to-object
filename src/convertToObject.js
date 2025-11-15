'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const clean = lines.map((l) => l.trim()).filter((l) => l);

  const reduced = clean.reduce((accumulator, line) => {
    const [keyPart, ...rest] = line.split(':');
    const valuePart = rest.join(':').replace(/;$/, '').trim();
    const key = keyPart.trim();
    const value = valuePart.trim();

    if (rest.length > 0 && key !== '' && value !== '') {
      accumulator[key] = value;
    }

    return accumulator;
  }, {});

  return reduced;
}

module.exports = convertToObject;
