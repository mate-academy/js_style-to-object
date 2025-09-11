'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  if (typeof styles !== 'string') return {};

  const entries = [];

  // Разбиваем по ;, убираем пустые и пробелы вокруг
  for (const rawDecl of styles.split(';')) {
    const decl = rawDecl.trim();
    if (!decl) continue;

    // Ищем первую двоеточию — отделяем prop и value
    const colonIdx = decl.indexOf(':');
    if (colonIdx === -1) continue; // невалидная строка — пропускаем

    const key = decl.slice(0, colonIdx).trim();
    const value = decl.slice(colonIdx + 1).trim();
    if (!key) continue;

    entries.push([key, value]);
  }

  // Повторы ключей перезатираются последним значением
  return Object.fromEntries(entries);
}

module.exports = convertToObject;
