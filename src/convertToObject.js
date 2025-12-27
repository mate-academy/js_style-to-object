'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.split('\n').forEach(line => {
    const trimmedLine = line.trim();

    // pomijamy puste linie i linie bez dwukropka
    if (!trimmedLine || !trimmedLine.includes(':')) return;

    // podział po pierwszym dwukropku
    const [keyPart, ...valueParts] = trimmedLine.split(':');
    const key = keyPart.trim();
    const value = valueParts.join(':').replace(/;$/, '').trim(); // usuwamy końcowy średnik

    obj[key] = value;
  });

  return obj;
}


module.exports = convertToObject;
