'use strict';

const Papa = require('papaparse');

module.exports = {
  process(sourceText) {
    return {
      code: 'module.exports = ' + JSON.stringify(Papa.parse(sourceText, { header: true }).data) + ';',
    };
  },
};
