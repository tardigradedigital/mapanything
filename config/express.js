const express = require('express');
const RateLimiter = require('express-rate-limit');
const bodyParser = require('body-parser');

module.exports = function (app, cfg) {
  // API limiter configuration
  const limiter = new RateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    delayMs: 0,
  });
  app.set('views', cfg.rootPath + '/views');
  app.set('view engine', 'pug');
  app.use('/api', limiter);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(cfg.rootPath + '/public'));
};
