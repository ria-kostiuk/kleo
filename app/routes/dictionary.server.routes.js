'use strict';

var dictionaries = require('../../app/controllers/dictionary.server.controller');

module.exports = function(app) {
  app.route('/dictionary')
    .get(dictionaries.list);

  app.route('/dictionary/:dictId')
    .get(dictionaries.getById);

  app.param('dictId', dictionaries.getById);
};