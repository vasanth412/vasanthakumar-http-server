//Problem 1:
// GET /html - Should return the following HTML content. Note when opened in the browser it
// should display the HTML page and not the HTML code.

const uuid4 = require('uuid4');

exports.getHTML = (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
      <p> - Martin Fowler</p>

  </body>
</html>`);
};

//Problem 2:
// GET /json - Should return the following JSON string

exports.getJSON = (req, res) => {
  res.json({
    slideshow: {
      author: 'Yours Truly',
      date: 'date of publication',
      slides: [
        {
          title: 'Wake up to WonderWidgets!',
          type: 'all',
        },
        {
          items: [
            'Why <em>WonderWidgets</em> are great',
            'Who <em>buys</em> WonderWidgets',
          ],
          title: 'Overview',
          type: 'all',
        },
      ],
      title: 'Sample Slide Show',
    },
  });
};

//Problem 3:
//GET /uuid - Should return a UUID4.
exports.getUUID = (req, res) => {
  res.json({ uuid: uuid4() });
};

exports.getStatus = (req, res) => {
  const statusCode = parseInt(req.params.statusCode);
  if (isNaN(statusCode)) {
    return res.json({ msg: `Unknown status code ${statusCode}` });
  }
  res
    .status(statusCode)
    .json(
      statusCode <= 500 ? { statusCode } : { statusCode: 'Unknown status code' }
    );
};

exports.getDelayTime = (req, res) => {
  const delayTime = req.params.delayTime;

  setTimeout(() => {
    res.json({ delayTime });
  }, delayTime * 1000);
};
