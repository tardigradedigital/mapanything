const rootPath = __dirname;
let config;

module.exports = new Promise(function (resolve) {
  if (config) resolve(config);
  config = {
    port: 80,
    rootPath,
  };
});
