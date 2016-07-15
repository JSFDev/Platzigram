var page = require('page'),
    empty = require('empty-element'),
    template = require('./template');

page('/signin', function (ctx, next) {
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
});