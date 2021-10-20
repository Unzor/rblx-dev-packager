const http = require('http');
const https = require('https');
const url = require('url');

const request = (opts = {}, cb) => {
  const requester = opts.protocol === 'https:' ? https : http;
  return requester.request(opts, cb);
};

module.exports = target => new Promise((resolve, reject) => {
  let uri;

  try {
    uri = url.parse(target);
  } catch (err) {
    reject(new Error(`Invalid url ${target}`));
  }

  const options = {
    method: 'HEAD',
    host: uri.host,
    protocol: uri.protocol,
    port: uri.port,
    path: uri.path,
    timeout: 5 * 1000,
  };

  const req = request(options, (res) => {
    const { statusCode } = res;

    if (statusCode >= 200 && statusCode < 300) {
      resolve(target);
    } else {
      reject(new Error(`Url ${target} not found.`));
    }
  });

  req.on('error', reject);

  req.end();
});
