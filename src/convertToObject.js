'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  // Обробити завершені декларації в кінці (рядки з ';')
  const lines = splitLinesAndTrimEnd(sourceString);
  const css = {};
  let buffer = '';

  lines.forEach((part) => {
    buffer = processBuffer(part, buffer, css);
  });

  // Обробити незавершені декларації в кінці (рядок без ';')
  const remainder = buffer.trim();

  if (remainder) {
    const parsed = parseDeclaration(remainder);

    if (parsed) {
      css[parsed.key] = parsed.value;
    }
  }

  return css;
}

// Повертає масив непорожніх рядків, обрізаючи тільки кінець рядка
function splitLinesAndTrimEnd(str) {
  return str
    .split(/\r?\n/)
    .map((s) => s.trimEnd())
    .filter((s) => s !== '');
}

// Додає part до buffer; якщо з'являються повні декларації (закінчені ';'),
// розбирає їх і застосовує до css. Повертає новий buffer — або
// порожній рядок, або незавершену частину.
function processBuffer(part, buffer, css) {
  const bufferCopy = appendPartToBuffer(buffer, part);

  if (!bufferCopy.includes(';')) {
    return bufferCopy;
  }

  const { declarations, remainder } = extractCompleteDeclarations(bufferCopy);

  const parsed = declarations.map(parseDeclaration).filter(Boolean);

  applyDeclarations(css, parsed);

  return remainder;
}

function appendPartToBuffer(buffer, part) {
  if (!buffer) {
    return part;
  }

  return buffer + '\n' + part;
}

function extractCompleteDeclarations(bufferCopy) {
  const pieces = bufferCopy.split(';');
  // pieces[0..n-2] — повні декларації (до ';'), pieces[n-1] — можливий
  // незавершений фрагмент
  const declarations = pieces
    .slice(0, -1)
    .map((s) => s.trim())
    .filter(Boolean);

  // останній елемент — можливий незавершений залишок
  const remainder = pieces[pieces.length - 1].trim();

  return { declarations, remainder };
}

function applyDeclarations(css, declarations) {
  declarations.forEach((p) => {
    css[p.key] = p.value;
  });
}

// отримати "key: value" (без кінцевого ';') і повернути {key, value} або null
function parseDeclaration(str) {
  const idx = str.indexOf(':');

  if (idx === -1) {
    return null;
  }

  const key = str.slice(0, idx).trim();
  let value = str.slice(idx + 1).trim();

  // Видаляє кінцевий ';' (якщо є) і обрізає пробіли, повертає null при
  // відсутності ключа
  value = value.replace(/;$/, '').trim();

  if (!key) {
    return null;
  }

  return { key, value };
}

module.exports = convertToObject;
