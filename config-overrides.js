module.exports = function override(config, env) {
  let loaders = config.resolve;
  loaders.fallback = {
    fs: false,
    tls: false,
    net: false,
    http: false,
    https: false,
    zlib: false,
    path: false,
    stream: false,
    util: false,
    crypto: false,
  };

  return config;
};
