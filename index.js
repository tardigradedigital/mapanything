const express = require('express');
const compression = require('compression');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(compression());

const configLoad = require('./config/config');

configLoad.then(function (cfg) {
  require('./config/express')(app, cfg);
  require('./config/routes')(app);

  const srv = http.createServer(app);
  srv.listen(cfg.port);
  srv.on('error', function (err) {
    console.log(new Error('Failed to launch server. Caught error:' + err.message));
  });
  console.log('Started server on port ' + cfg.port);
}).catch(function (err) {
  console.log(new Error('Failed to load config. Caught error:' + err.message));
});
