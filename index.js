const http = require('http');
const { getHTML, getJSON, getStatus } = require('./http');

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.statusCode = 404;
    res.end(`${req.method} method not allowed!`);
  }
  switch (req.url) {
    case '/html':
      getHTML(req, res);
      break;
    case '/json':
      getJSON(req, res);
      break;
    case '/uuid':
      getUuid(req, res);
      break;
    default:
      if (req.url.startsWith('/status/')) {
        const statusCode = parseInt(
          req.url.replace(/\/status\//g, '') || '200'
        );
        if (statusCode != 100) {
          res.writeHead(statusCode, {
            'Context-Type': 'text/json',
          });
        }
        res.end(
          JSON.stringify({
            [statusCode]: http.STATUS_CODES[statusCode] || 'Unknow status',
          })
        );
      } else if (req.url.startsWith('/delay')) {
        const delaySeconds = parseInt(req.url.replace(/\/delay\//g, '') || '0');

        setTimeout(() => {
          res.writeHead(200, {
            'Content-Type': 'text/plain',
          });
          res.end('Response delayed for ' + delaySeconds + ' seconds');
        }, delaySeconds * 1000);
      } else {
        res.end('Incorrect url....!');
      }
  }
});

server.listen(3000, () => console.log(`Server started port 3000....,`));
