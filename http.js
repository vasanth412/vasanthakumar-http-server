const uuid4 = require('uuid4');

exports.getHTML = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
      <p> - Martin Fowler</p>

  </body>
</html>`);
};

exports.getJSON = (req, res) => {
  res.writeHead(200, { 'Content-Text': 'text/json' });
  res.end(`{
    "slideshow": {
      "author": "Yours Truly",
      "date": "date of publication",
      "slides": [
        {
          "title": "Wake up to WonderWidgets!",
          "type": "all"
        },
        {
          "items": [
            "Why <em>WonderWidgets</em> are great",
            "Who <em>buys</em> WonderWidgets"
          ],
          "title": "Overview",
          "type": "all"
        }
      ],
      "title": "Sample Slide Show"
    }
  }`);
};

exports.getUUID = (req, res) => {
  res.writeHead(200, { 'Content-Text': 'text/uuid' });
  const uuid = { uuid: uuid4() };
  res.end(`${JSON.stringify(uuid)}`);
};

exports.getStatus = (req, res) => {};
