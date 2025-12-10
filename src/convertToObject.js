'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const commands = sourceString
    .split(';').reduce((commandBlock, command) => {
      const commandParts = command.split(':');
      if (commandParts.length === 2) {
        commandBlock[commandParts[0].trim()] = commandParts[1].trim();
      }

      return commandBlock;
    }, {})
  return commands;
}

module.exports = convertToObject;
